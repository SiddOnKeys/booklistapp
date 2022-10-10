import { useReducer, useState } from "react";
import { addUser } from "../service/api";
import { useEffect } from "react";
import { getUsers, deleteUser } from "../service/api";
import { useResolvedPath } from "react-router-dom";
import removeicon from "../removeicon.png";
import editicon from "../editicon.png";
const editiconpng = editicon;
const removeiconpng = removeicon;

const Home = () => {
  const [user, setUser] = useState();
  const onValueChange = (e) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    await addUser(user);
  };

  const [books, setBooks] = useState([]);
  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    let response = await getUsers();

    setBooks(response.data);
  };

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getUserDetails();
  };

  return (
    <div className="container grid">
      <div className="booklist">
        <h1 className="Section">Catalogue</h1>

        <table>
          <thead>
            <tr>
              <th>Book title</th>
              <th>Author</th>
              <th>Year</th>
              <th className="tablebuttons"> </th>
            </tr>
          </thead>
          <tbody id="book-list">
            {books.map((book, index) => (
              <tr key={index}>
                <td> {book.title} </td>
                <td>{book.author}</td>
                <td>{book.year}</td>
                <td className="iconcontainer">
                  <a
                    onClick={() => deleteUserData(book.id)}
                    href="#"
                    className="btn delete"
                  >
                    <img className="icons  btn-danger" src={removeiconpng} />
                  </a>
                  {/* <button onClick={() => deleteUserData(book.id)}>
                    Delete
                  </button> */}
                  {/* <a href="#" className="btn">
                    <img className="icons  btn-edit" src={editiconpng} />
                  </a> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="submit-forum">
        <h1 className="Section">Add Book</h1>
        <form id="book-form">
          <fieldset>
            <legend>Submit a Book:</legend>
            <div className="sf-form-container">
              <div className="sf-h-block">
                <label className="title">Title:</label>
                <label className="author">Author:</label>
                <label className="year">Finished on:</label>
              </div>
              <div className="sf-h-block">
                <input
                  type="text"
                  id="title"
                  name="title"
                  onChange={(e) => onValueChange(e)}
                />
                <input
                  type="text"
                  id="author"
                  name="author"
                  onChange={(e) => onValueChange(e)}
                />
                <input
                  type="text"
                  id="year"
                  name="year"
                  onChange={(e) => onValueChange(e)}
                />
              </div>
            </div>
            <button onClick={() => addUserDetails()} type="submit">
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Home;
