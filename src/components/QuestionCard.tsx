'use client'

import { useState } from 'react'

interface QuestionCardProps {
  question: {
    id: string
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
    category: string
    subcategory?: string
    difficulty: number
  }
  onAnswer: (isCorrect: boolean, timeTaken: number) => void
  onNext: () => void
}

export default function QuestionCard({ question, onAnswer, onNext }: QuestionCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [startTime] = useState(Date.now())

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return // Already answered
    
    const timeTaken = Math.round((Date.now() - startTime) / 1000)
    const isCorrect = index === question.correctAnswer
    setSelectedAnswer(index)
    setShowExplanation(true)
    onAnswer(isCorrect, timeTaken)
  }

  const getOptionClass = (index: number) => {
    if (selectedAnswer === null) return 'border-gray-300 hover:border-blue-500 hover:bg-blue-50'
    if (index === question.correctAnswer) return 'border-green-600 bg-green-100 text-green-900'
    if (index === selectedAnswer && index !== question.correctAnswer) return 'border-red-600 bg-red-100 text-red-900'
    return 'border-gray-200 bg-gray-50 opacity-60'
  }

  const difficultyLabels = ['Very Easy', 'Easy', 'Medium', 'Hard', 'Very Hard']
  const difficultyColors = ['bg-green-100 text-green-800', 'bg-green-100 text-green-800', 'bg-yellow-100 text-yellow-800', 'bg-orange-100 text-orange-800', 'bg-red-100 text-red-800']

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-block bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
            {question.category}
          </span>
          {question.subcategory && (
            <span className="inline-block bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full">
              {question.subcategory}
            </span>
          )}
        </div>
        <span className={`inline-block text-sm font-medium px-3 py-1 rounded-full ${difficultyColors[question.difficulty - 1]}`}>
          {difficultyLabels[question.difficulty - 1]}
        </span>
      </div>

      {/* Question */}
      <div className="bg-gray-50 rounded-xl p-6 mb-6">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 leading-relaxed">
          {question.question}
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={selectedAnswer !== null}
            className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 ${getOptionClass(index)} ${
              selectedAnswer === null ? 'cursor-pointer hover:shadow-md' : 'cursor-default'
            }`}
          >
            <div className="flex items-start gap-3">
              <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                selectedAnswer === null 
                  ? 'bg-gray-200 text-gray-700'
                  : index === question.correctAnswer
                  ? 'bg-green-600 text-white'
                  : index === selectedAnswer
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}>
                {String.fromCharCode(65 + index)}
              </span>
              <span className="flex-1 pt-0.5 text-gray-800">{option}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Explanation */}
      {showExplanation && (
        <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">
              {selectedAnswer === question.correctAnswer ? '✓' : '✗'}
            </span>
            <h3 className={`text-lg font-bold ${selectedAnswer === question.correctAnswer ? 'text-green-800' : 'text-red-800'}`}>
              {selectedAnswer === question.correctAnswer ? 'Correct!' : 'Incorrect'}
            </h3>
          </div>
          <div className="bg-white rounded-lg p-4 border border-blue-100">
            <h4 className="font-semibold text-gray-800 mb-2">Explanation:</h4>
            <p className="text-gray-700 leading-relaxed">{question.explanation}</p>
          </div>
        </div>
      )}

      {/* Next Button */}
      {showExplanation && (
        <button
          onClick={onNext}
          className="mt-6 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
        >
          Next Question →
        </button>
      )}
    </div>
  )
}
