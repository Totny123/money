import classnames from "classnames";

//导入icons目录下的所有svg。webpack知识。
let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("icons", true, /\.svg$/));
} catch (error) {
  console.log(error);
}

type Props = {
  name?: string;
} & React.SVGAttributes<SVGSVGElement>;
function Icon(props: Props) {
  const { name, children, className, ...rest } = props;
  return (
    <svg className={classnames("icon", className)} {...rest}>
      {name && <use xlinkHref={`#${name}`}></use>}
    </svg>
  );
}
export default Icon;
