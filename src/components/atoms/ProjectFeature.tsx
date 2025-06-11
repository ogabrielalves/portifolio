
interface ProjectFeatureProps {
  feature: string;
  color: string;
}

const ProjectFeature = ({ feature, color }: ProjectFeatureProps) => {
  const getIconColor = (color: string) => {
    const colors = {
      blue: "bg-blue-400",
      purple: "bg-purple-400",
      cyan: "bg-cyan-400",
      yellow: "bg-yellow-400",
      green: "bg-green-400"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <li className="text-sm text-gray-300 flex items-center">
      <div className={`w-1.5 h-1.5 rounded-full mr-2 ${getIconColor(color)}`}></div>
      {feature}
    </li>
  );
};

export default ProjectFeature;
