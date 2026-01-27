'use client'

import { useState, useEffect } from 'react'
import QuestionCard from '@/components/QuestionCard'
import ProgressTracker from '@/components/ProgressTracker'
import { sampleQuestions, getAllCategories } from '@/lib/questionBank'

interface Answer {
  questionId: string
  isCorrect: boolean
  timeTaken: number
  category: string
}

export default function PracticePage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [startTime] = useState(Date.now())
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [filteredQuestions, setFilteredQuestions] = useState(sampleQuestions)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(Math.floor((Date.now() - startTime) / 1000))
    }, 1000)
    return () => clearInterval(timer)
  }, [startTime])

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredQuestions(sampleQuestions)
    } else {
      const filtered = sampleQuestions.filter(q => 
        q.category === selectedCategory || q.subcategory === selectedCategory
      )
      setFilteredQuestions(filtered)
    }
  }, [selectedCategory])

  const handleAnswer = (isCorrect: boolean, timeTaken: number) => {
    setAnswers(prev => [...prev, {
      questionId: filteredQuestions[currentIndex].id,
      isCorrect,
      timeTaken,
      category: filteredQuestions[currentIndex].subcategory || filteredQuestions[currentIndex].category
    }])
  }

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1)
    } else {
      setIsComplete(true)
    }
  }

  const correctCount = answers.filter(a => a.isCorrect).length

  if (isComplete) {
    const accuracy = Math.round((correctCount / answers.length) * 100)
    const avgTime = Math.round(answers.reduce((sum, a) => sum + a.timeTaken, 0) / answers.length)

    // Calculate performance by category
    const categoryStats: Record<string, { correct: number; total: number }> = {}
    answers.forEach(answer => {
      if (!categoryStats[answer.category]) {
        categoryStats[answer.category] = { correct: 0, total: 0 }
      }
      categoryStats[answer.category].total++
      if (answer.isCorrect) {
        categoryStats[answer.category].correct++
      }
    })

    return (
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">Session Complete!</h1>
              <p className="text-gray-600 text-center mb-8">
                You answered {filteredQuestions.length} questions in {Math.floor(timeElapsed / 60)}m {timeElapsed % 60}s
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="p-4 bg-blue-50 rounded-xl text-center">
                  <div className="text-3xl font-bold text-blue-600">{accuracy}%</div>
                  <div className="text-sm text-gray-600">Accuracy</div>
                </div>
                <div className="p-4 bg-green-50 rounded-xl text-center">
                  <div className="text-3xl font-bold text-green-600">{correctCount}</div>
                  <div className="text-sm text-gray-600">Correct</div>
                </div>
                <div className="p-4 bg-purple-50 rounded-xl text-center">
                  <div className="text-3xl font-bold text-purple-600">{answers.length - correctCount}</div>
                  <div className="text-sm text-gray-600">Incorrect</div>
                </div>
                <div className="p-4 bg-orange-50 rounded-xl text-center">
                  <div className="text-3xl font-bold text-orange-600">{avgTime}s</div>
                  <div className="text-sm text-gray-600">Avg Time</div>
                </div>
              </div>

              {Object.keys(categoryStats).length > 0 && (
                <div className="mb-8">
                  <h2 className="font-semibold text-gray-900 mb-4 text-lg">Performance by Category</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {Object.entries(categoryStats).map(([category, stats]) => {
                      const catAccuracy = Math.round((stats.correct / stats.total) * 100)
                      return (
                        <div key={category} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm font-medium text-gray-700">{category}</span>
                          <div className="flex items-center gap-3">
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${catAccuracy >= 60 ? 'bg-green-500' : catAccuracy >= 40 ? 'bg-yellow-500' : 'bg-red-500'}`}
                                style={{ width: `${catAccuracy}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-semibold text-gray-800 w-12 text-right">
                              {catAccuracy}%
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h2 className="font-semibold text-gray-900 mb-4 text-lg">Question Review</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-80 overflow-y-auto">
                  {filteredQuestions.map((q, idx) => {
                    const answer = answers[idx]
                    return (
                      <div key={q.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          answer?.isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {answer?.isCorrect ? '✓' : '✗'}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-700 line-clamp-2">
                            {idx + 1}. {q.question}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{q.subcategory || q.category}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    setAnswers([])
                    setCurrentIndex(0)
                    setIsComplete(false)
                    setTimeElapsed(0)
                  }}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-lg"
                >
                  Practice Again
                </button>
                <button
                  onClick={() => window.location.href = '/'}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-xl transition-colors"
                >
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Category Selector */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-semibold text-gray-700">Filter by:</span>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('All')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === 'All'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All ({sampleQuestions.length})
                </button>
                {getAllCategories().map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === cat
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <ProgressTracker
            total={filteredQuestions.length}
            answered={answers.length}
            correct={correctCount}
            timeElapsed={timeElapsed}
          />
          
          <QuestionCard
            question={filteredQuestions[currentIndex]}
            onAnswer={handleAnswer}
            onNext={handleNext}
          />
        </div>
      </div>
    </main>
  )
}
