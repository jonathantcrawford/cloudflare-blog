




export const Meta = ({meta}: any) => {
  return (
    <div className="">
        <div className="">{meta.emoji}</div>
        <div className="">{meta.title}</div>
        <div className="">{meta.subtitle}</div>
        <div className="">{meta.author}</div>
        <div className="">{meta.date}</div>
    </div>
  );
};
