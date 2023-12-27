import React from "react";


function GroceryList({ groceryData, handleEdit, handleDelete }) {
  return (
    <div className="flex justify-center">
      <div className="w-10/12 mt-2 rounded-xl h-24 bg-gradient-to-r from-gray-400 via-yellow-500 to-indigo-300 text-center">
        <table className="w-full">
          <thead>
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Quantity</th>
              <th className="p-2">Category</th>
              <th className="p-2">Price</th>
              <th className="p-2">Supplier</th>
              <th className="p-2">Product</th>
              <th className="p-2">Purchase</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {groceryData.map((item) => (
              <tr
                key={item.id}
                className="bg-gray-400 border-b border-slate-300 rounded-xl"
              >
                <td className="p-2">{item.name}</td>
                <td className="p-2">{item.quantity}</td>
                <td className="p-2">{item.category}</td>
                <td className="p-2">{item.price}</td>
                <td className="text-sm font-thin ml-4">
                  <p>Name: {item.supplier.name}</p>
                  <p>Contact: {item.supplier.contact}</p>
                  <p>Address: {item.supplier.address}</p>
                </td>
                <td className="text-sm font-thin ml-4">
                  <p>Barcode: {item.productDetails.barcode}</p>
                  <p>Brand: {item.productDetails.brand}</p>
                  <p>Weight/Volume: {item.productDetails.weightVolume}</p>
                </td>
                <td className="text-sm font-thin ml-4">
                  <p>Purchase Price: {item.purchaseDetails.purchasePrice}</p>
                  <p>
                    Order Number: {item.purchaseDetails.purchaseOrderNumber}
                  </p>
                  <p>
                    Purchase Date:{" "}
                    {new Date(
                      item.purchaseDetails.purchaseDate
                    ).toLocaleDateString()}
                  </p>
                </td>
                <td className="p-2">
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="mr-2 bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GroceryList;
