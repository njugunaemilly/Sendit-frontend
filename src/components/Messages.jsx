import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessages } from "../slices/messagesSlice";
import Swal from "sweetalert2";

export default function Messages() {
  const dispatch = useDispatch();
  const { messages, loading } = useSelector((state) => state.messages);

  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  function replyTo(e) {
    e.preventDefault();
    let data = {
      message: e.target.elements.text.value,
      email: e.target.name,
      id: e.target.id,
    };
    fetch("api/reply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Reply successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

    console.log(data);
  }
  return (
    <ul className="divide-y divide-gray-100 mx-auto container border-t-2">
      {messages.map((message) => (
        <li
          key={message.email}
          className="flex flex-col gap-y-2 items-center md:flex-row md:justify-between py-5"
        >
          <div className="flex gap-x-4">
            <img
              className="h-12 w-12 flex-none rounded-full bg-gray-50"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS53BipoUpqhYStcq1xoivFuvNhCbPj9fBhm6apQl5HjKkkd82Zks5VynNIKzpkgUJ8Ybc&usqp=CAU"
              alt=""
            />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {message.name}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                <span className="font-bold">Email:</span> {message.email}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                {message.help}
              </p>
            </div>
          </div>
          <form onSubmit={replyTo} id={message.id} name={message.email}>
            <textarea
              rows={4}
              name="text"
              id="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <button className="text-xs leading-5 text-gray-500">Reply</button>
          </form>
        </li>
      ))}
    </ul>
  );
}
