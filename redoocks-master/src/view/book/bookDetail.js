import React, { useState } from "react";

const BookView = (props) => {
  console.log("## props: ", this.props);
  //hook 방식.
  /**
   * 리엑트 MVVM 방식에서 model 쪽에 데이터를 제거해도, view 쪽은 삭제가 되던말던 관심이 없다.
   * 그래서 삭제만 되고 끝이다.
   * MVVM원칙상 ViewModel이 view쪽에 신호를 줘야되는데, 리엑트에서는 그게 안되서 View단에서 자체신호를 만들어야함
   */
  const [renderFlag, setRenderFlag] = useState(true);

  const [newInput1, setNewInput1] = useState("");
  const [newInput2, setNewInput2] = useState("");

  let books = props.viewModel.get(+1);
  const onSubmit = (e) => {
    e.preventDefault();
    props.viewModel.update(+1, { name: newInput1, author: newInput2 });
    setNewInput1("");
    setNewInput2("");
    setRenderFlag(!renderFlag);
  };
  const onChange1 = (e) => {
    const {
      target: { value },
    } = e;
    setNewInput1(value);
  };
  const onChange2 = (e) => {
    const {
      target: { value },
    } = e;
    setNewInput2(value);
    console.log(value);
  };
  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="바꿀 책이름"
          value={newInput1}
          //왼쪽에 있는 onChange 라는 얘는 이름을 바꾸면 안된다. 리엑트에서 정의해놓은 event listener 이다
          onChange={(e) => onChange1(e)}
        />
        <input
          type="text"
          placeholder="바꿀 저자"
          value={newInput2}
          onChange={(e) => onChange2(e)}
        />
        <button className="read">검색</button>
        <button className="create">등록</button>
      </form>

      <div className="list">
        <ul></ul>
      </div>
    </>
  );
};
export default BookView;
