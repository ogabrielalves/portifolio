
interface TechnologyTagProps {
  technology: string;
  color: string;
}

const TechnologyTag = ({ technology, color }: TechnologyTagProps) => {
  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500/20 to-blue-600/20 border-blue-400/30 shadow-blue-500/25",
      purple: "from-purple-500/20 to-purple-600/20 border-purple-400/30 shadow-purple-500/25",
      cyan: "from-cyan-500/20 to-cyan-600/20 border-cyan-400/30 shadow-cyan-500/25",
      yellow: "from-yellow-500/20 to-yellow-600/20 border-yellow-400/30 shadow-yellow-500/25",
      green: "from-green-500/20 to-green-600/20 border-green-400/30 shadow-green-500/25"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconColor = (color: string) => {
    const colors = {
      blue: "text-blue-400",
      purple: "text-purple-400",
      cyan: "text-cyan-400",
      yellow: "text-yellow-400",
      green: "text-green-400"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <span className={`px-2 py-1 rounded text-xs font-medium border bg-gradient-to-r backdrop-blur-sm ${getColorClasses(color)} ${getIconColor(color)}`}>
      {technology}
    </span>
  );
};

export default TechnologyTag;
