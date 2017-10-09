const renderTextToBody = (text) => {
  const div = document.createElement('div');
  const p = document.createElement('p');
  const textNode = document.createTextNode(text);
  p.appendChild(textNode);
  div.appendChild(p);
  document.body.appendChild(div);
};

export default renderTextToBody;
