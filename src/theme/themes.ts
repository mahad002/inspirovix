export const themes = {
  dark: {
    background: {
      primary: 'bg-navy-900',
      secondary: 'bg-white/5',
      gradient: 'bg-gradient-to-b from-navy-900 via-purple-900/50 to-navy-900',
      card: 'bg-white/5 backdrop-blur-lg',
      cardHover: 'hover:bg-white/10'
    },
    text: {
      primary: 'text-white',
      secondary: 'text-gray-300',
      accent: 'text-purple-400'
    },
    border: {
      primary: 'border-gray-800',
      accent: 'border-purple-500'
    },
    button: {
      primary: 'bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700',
      secondary: 'bg-white/10 hover:bg-white/20'
    },
    glow: {
      primary: 'shadow-lg shadow-purple-500/20',
      accent: 'shadow-lg shadow-fuchsia-500/30'
    }
  },
  light: {
    background: {
      primary: 'bg-gray-50',
      secondary: 'bg-white',
      gradient: 'bg-gradient-to-b from-gray-50 via-purple-50/50 to-gray-50',
      card: 'bg-white shadow-xl',
      cardHover: 'hover:bg-gray-50'
    },
    text: {
      primary: 'text-gray-900',
      secondary: 'text-gray-600',
      accent: 'text-purple-600'
    },
    border: {
      primary: 'border-gray-200',
      accent: 'border-purple-400'
    },
    button: {
      primary: 'bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600',
      secondary: 'bg-gray-100 hover:bg-gray-200'
    },
    glow: {
      primary: 'shadow-lg shadow-purple-200/50',
      accent: 'shadow-lg shadow-fuchsia-200/50'
    }
  }
} as const;