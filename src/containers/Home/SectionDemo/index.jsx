import Demo from "./Demo";

const SectionDemo = ({ data }) => {
  return (
    <div class="row">{data && <Demo img={data.img} path={data.path} />}</div>
  );
};

export default SectionDemo;
