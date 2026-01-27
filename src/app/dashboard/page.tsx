import { prisma } from '@/lib/prisma'
import { getAllCategories } from '@/lib/questionBank'

async function getDashboardData() {
  // In production, this would fetch real user data
  // For demo, return mock data
  return {
    totalQuestions: 45,
    correctAnswers: 32,
    accuracy: 71,
    studyStreak: 7,
    weakAreas: ['Cardiology - 55%', 'Neurology - 60%', 'Surgery - 58%'],
    strongAreas: ['Pediatrics - 90%', 'Endocrinology - 85%', 'Respiratory - 82%'],
    recentSessions: [
      { date: '2025-01-26', score: 78, type: 'Practice', questions: 20, time: '25m' },
      { date: '2025-01-25', score: 82, type: 'Practice', questions: 15, time: '18m' },
      { date: '2025-01-24', score: 68, type: 'Review', questions: 10, time: '12m' },
    ],
    categoryBreakdown: {
      'Medicine - Cardiology': { correct: 5, total: 8 },
      'Medicine - Endocrinology': { correct: 6, total: 7 },
      'Medicine - Respiratory': { correct: 5, total: 6 },
      'Surgery - General Surgery': { correct: 3, total: 6 },
      'Pediatrics - Infectious Diseases': { correct: 3, total: 3 },
      'Medicine - Neurology': { correct: 4, total: 6 },
    }
  }
}

export default async function DashboardPage() {
  const data = await getDashboardData()

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <div className="flex gap-3">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
                Start Practice
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
                Mock Exam
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-xl p-5 shadow-lg">
              <div className="text-3xl font-bold text-blue-600">{data.totalQuestions}</div>
              <div className="text-sm text-gray-600 mt-1">Questions Answered</div>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-lg">
              <div className="text-3xl font-bold text-green-600">{data.correctAnswers}</div>
              <div className="text-sm text-gray-600 mt-1">Correct Answers</div>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-lg">
              <div className="text-3xl font-bold text-purple-600">{data.accuracy}%</div>
              <div className="text-sm text-gray-600 mt-1">Overall Accuracy</div>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-lg">
              <div className="text-3xl font-bold text-orange-600">{data.studyStreak} 🔥</div>
              <div className="text-sm text-gray-600 mt-1">Day Streak</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Category Performance</h2>
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {Object.entries(data.categoryBreakdown).map(([category, stats]) => {
                  const accuracy = Math.round((stats.correct / stats.total) * 100)
                  const isWeak = accuracy < 60
                  return (
                    <div key={category} className="flex items-center gap-3">
                      <span className="text-sm text-gray-600 w-48 truncate">{category}</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${isWeak ? 'bg-red-500' : accuracy >= 80 ? 'bg-green-500' : 'bg-blue-500'}`}
                          style={{ width: `${accuracy}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold w-12 text-right">
                        {accuracy}%
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Weak Areas</h2>
              <div className="space-y-2">
                {data.weakAreas.map((area, idx) => (
                  <div key={idx} className="p-3 bg-red-50 rounded-lg border border-red-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-red-800">{area.split(' - ')[0]}</span>
                      <span className="text-xs text-red-600 font-semibold">{area.split(' - ')[1]}</span>
                    </div>
                    <div className="text-xs text-red-600 mt-1">Focus needed</div>
                  </div>
                ))}
              </div>

              <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-6">Strong Areas</h2>
              <div className="space-y-2">
                {data.strongAreas.map((area, idx) => (
                  <div key={idx} className="p-3 bg-green-50 rounded-lg border border-green-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-green-800">{area.split(' - ')[0]}</span>
                      <span className="text-xs text-green-600 font-semibold">{area.split(' - ')[1]}</span>
                    </div>
                    <div className="text-xs text-green-600 mt-1">Keep it up!</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Sessions</h2>
              <div className="space-y-2">
                {data.recentSessions.map((session, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div>
                      <div className="text-sm font-medium text-gray-800">{session.type}</div>
                      <div className="text-xs text-gray-500">{session.date} • {session.questions} questions • {session.time}</div>
                    </div>
                    <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                      session.score >= 80 ? 'bg-green-100 text-green-800' :
                      session.score >= 60 ? 'bg-blue-100 text-blue-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {session.score}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Study Plan Progress</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Daily Goal (50 questions)</span>
                    <span className="text-sm font-medium text-gray-800">32/50</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-blue-600 h-3 rounded-full transition-all" style={{ width: '64%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Weekly Target (350 questions)</span>
                    <span className="text-sm font-medium text-gray-800">245/350</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-green-600 h-3 rounded-full transition-all" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Exam Readiness</span>
                    <span className="text-sm font-medium text-gray-800">71%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-purple-600 h-3 rounded-full transition-all" style={{ width: '71%' }}></div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-sm">
                  Continue Practice
                </button>
                <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-4 rounded-lg transition-colors text-sm">
                  View Analytics
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Subjects</h2>
            <div className="flex flex-wrap gap-2">
              {getAllCategories().map((cat) => (
                <span key={cat} className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
