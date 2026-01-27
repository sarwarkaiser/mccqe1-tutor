'use client'

interface ProgressTrackerProps {
  total: number
  answered: number
  correct: number
  timeElapsed: number
}

export default function ProgressTracker({ total, answered, correct, timeElapsed }: ProgressTrackerProps) {
  const progress = (answered / total) * 100
  const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0
  const minutes = Math.floor(timeElapsed / 60)
  const seconds = timeElapsed % 60

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">{answered}/{total}</div>
          <div className="text-sm text-gray-600">Questions</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">{accuracy}%</div>
          <div className="text-sm text-gray-600">Accuracy</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600">{correct}</div>
          <div className="text-sm text-gray-600">Correct</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-600">{minutes}:{seconds.toString().padStart(2, '0')}</div>
          <div className="text-sm text-gray-600">Time</div>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}
