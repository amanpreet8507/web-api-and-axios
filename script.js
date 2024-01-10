const url = "https://reqres.in/api/users";

const pageNumber = document.querySelector('.page-number')
const totalPages = document.querySelector('.total-pages')

const fetchUsers = async () => {
  const response = await axios.get(url);
  //console.log(response.data);

  // Populate page and total_pages values
  pageNumber.innerText = response.data.page
  totalPages.innerText = response.data.total

  console.log(response.data.data)
  const usersArray = response.data.data

  usersArray.forEach(user => {

    console.log('userrrrr', user);
    
    // getting elements from html
    const userList =  document.querySelector('.user')
    const userImg = document.querySelector('.user__avatar')
    const userName = document.querySelector('.user__name')
    const userEmail = document.querySelector('.user__email')

    // insert them to html web
    userName.innerText = usersArray.first_name
    userEmail.innerText = usersArray.email

  });
};

// call the async function that we just created
fetchUsers();