import { useState } from "react";
import { products } from "../../data";
import List from "../List/List";
import "./App.css";

function App() {
  const [productlist, setProductList] = useState(products);
  let [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    imageUrl: "",
  });

  function handleNameChange(e) {
    setFormData({ ...formData, name: e.target.value });
  }

  const handleItemClick = (selectedProduct) => {
    setFormData({
      id: selectedProduct.id,
      name: selectedProduct.name,
      description: selectedProduct.description,
      price: selectedProduct.price,
      imageUrl: selectedProduct.imageUrl,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: productlist.length + 1,
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price),
      imageUrl: formData.imageUrl,
    };

    productlist.push(newItem);
    setProductList(productlist);

    setFormData({
      name: "",
      description: "",
      price: 0,
      imageUrl: "",
    });
  };

  function handleUpdate() {
    let indexToUpdate = productlist.findIndex(
      (item) => item.id === formData.id
    );
    if (indexToUpdate !== -1) {
      productlist[indexToUpdate] = formData;
      setFormData({
        name: "",
        description: "",
        price: 0,
        imageUrl: "",
      });
    }
  }



  const inputStyle = {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    boxSizing: "border-box",
    fontSize:"22px"
  };

  return (
    <div
      className="App"
      style={{ display: "flex", marginTop: "50px", justifyContent:"center" }}
    >
      <div>
        <form style={{fontSize:"22px"}} onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              style={inputStyle}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <label>Description:</label>
            <input
              style={inputStyle}
              type="text"
              name="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>
          <div>
            <label>Price:</label>
            <input
              style={inputStyle}
              type="number"
              name="price"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
            />
          </div>
          <div>
            <label>ImageUrl:</label>
            <input
              style={inputStyle}
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={(e) =>
                setFormData({ ...formData, imageUrl: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            style={{
              padding: "20px 30px",
              fontSize: "20px",
              marginTop:"30px"
            }}
          >
            Add Item
          </button>
          <br></br>
        </form>
        <button
          onClick={(e) => {
            handleUpdate();
          }}
          style={{
            padding: "20px 30px",
            fontSize: "20px",
            marginTop:"30px"
          }}
        >
          Update
        </button>
      </div>
      <div
        style={{
          border: "1px solid #ece",
          marginLeft: "50px",
          marginRight: "30px",
          width: "30%",
        }}
      >
        <List products={productlist} onItemClick={handleItemClick}></List>
      </div>
    </div>
  );
}

export default App;
