import Swiper from "@/components/Swiper";
import Category from "@/components/store/components/Category";
interface ICategoryObject {
  image: string;
  title: string;
}

interface ICategoriesProps {
  data: ICategoryObject[];
}
function Categories(props: ICategoriesProps) {
  const { data } = props;
  return (
    <Swiper>
      {data.map((category, i) => (
        <Category key={i} data={category} />
      ))}
    </Swiper>
  );
}

export default Categories;
