import CardProductDetail from "@/components/card/CardProdcutDetail";

type PropsParam = {
  params: {
    slugId: number,
  };
  searchParams: any
}

const ENDPOINT = "https://fakestoreapi.com/products/"

export const getData = async (slugId: number) =>{
  const res = await fetch(`${ENDPOINT}${slugId}`);
  const data = await res.json();
  return data;
}

const page = async (props: PropsParam) => {
  const data = await getData(props.params.slugId)
  return (
    <div>Page product detail 
      <CardProductDetail 
        title={data?.title || "non-title"} 
        description={data?.description || "non-description"} 
        image={data?.image || "image not fount"}
      />
    </div>
  )
}

export default page