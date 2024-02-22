document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('form');
    const expenseList = document.getElementById('expense-list');

    form.addEventListener('submit', function(event){
        event.preventDefault();

        const amount = document.getElementById('amount').value;
        const discription = document.getElementById('discription').value;
        const category = document.getElementById('category').value;

        const expenseObj = {
            'amount': amount,
            'discription': discription,
            'category': category
        };

        let objString = JSON.stringify(expenseObj);
        localStorage.setItem('objString', objString);
        form.reset();

        let objectReturned = JSON.parse(localStorage.getItem('objString'));

        displayExpense(objectReturned);

        
    });

    function displayExpense(expense) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div>
                <strong>Description:</strong> ${expense.amount}
                <strong>Description:</strong> ${expense.discription}
                <strong>Category:</strong> ${expense.category}
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;
        expenseList.appendChild(listItem);

        const editBtn = listItem.querySelector('.edit-btn');
        editBtn.addEventListener('click', function() {
            document.getElementById('amount').value = expense.amount;
            document.getElementById('discription').value = expense.discription;
            document.getElementById('category').value = expense.category;
            listItem.remove();

        });

        const deleteBtn = listItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            listItem.remove();
        });
    }


});
