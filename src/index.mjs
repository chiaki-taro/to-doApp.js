import "./styles.css";

 const onClickAdd = () => {
   const inputText = document.getElementById("add-text").value;
   document.getElementById("add-text").value = "";

   createIncompleteList(inputText);
   
   };

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const createIncompleteList = (text)=> {
  const li = document.createElement("li");

   const div = document.createElement("div");
   div.className = "list-row";
   
   const p = document.createElement("p");
   p.innerText = text;

   const completeButton = document.createElement("button");
   completeButton.innerText = "完了";
   completeButton.addEventListener("click", ()=>{
    
    deleteFromIncompleteList(completeButton.parentNode.parentNode);
    const addTarget = completeButton.parentNode.parentNode;
    const text = addTarget.firstChild.firstChild.innerText;
    addTarget.firstChild.textContent = null;
    
    const p = document.createElement("p");
    p.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", ()=> {
      
      const deletTarget = backButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deletTarget);

      const text = backButton.previousSibling.innerText;
      createIncompleteList(text);

    });
    
    addTarget.appendChild(div);
    div.appendChild(p);
    div.appendChild(backButton);

    document.getElementById("complete-list").appendChild(addTarget);

   });

   const deleteButton = document.createElement("button");
   deleteButton.innerText = "削除";
   deleteButton.addEventListener("click", ()=>{
    //押された削除ボタンの親タグ<li>を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });
   
  
   li.appendChild(div);
   div.appendChild(p);
   div.appendChild(completeButton);
   div.appendChild(deleteButton);

  
   document.getElementById("incomplete-list").appendChild(li);
  

};

document
  .getElementById("add-button")
  .addEventListener("click" , () => onClickAdd());
