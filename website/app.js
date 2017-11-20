const list = document.querySelector('#candidate-list ul');

list.addEventListener('click', function(e) {
    if (e.target.className == 'delete') {
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

const addForm = document.forms['create-candidates'];

addForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const value = addForm.querySelector("input[type='text']").value;

    const li = document.createElement("li");
    const candidateName = document.createElement("span");
    const deleteBtn = document.createElement("span");
    const likeBtn = document.createElement("span");
    const count = document.createElement("span");

    deleteBtn.textContent = 'delete';
    likeBtn.textContent = 'like';
    count.textContent = 0;
    candidateName.textContent = value;

    candidateName.classList.add('name');
    deleteBtn.classList.add('delete');
    likeBtn.classList.add('like');
    count.classList.add('count');

    li.appendChild(candidateName);
    li.appendChild(deleteBtn);
    li.appendChild(likeBtn);
    li.appendChild(count);
    list.appendChild(li);

})