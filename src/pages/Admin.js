import React, { useState } from "react";

const Admin = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    // FOR BUG IN CHROME
    event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  return (
    <section className="flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8">

    <div>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
            <div className="mr-4 mb-4">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Nadpis</label>
                <input
                    placeholder="Stručný nadpis inzerátu"
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red-300 rounded py-3 px-4 mb-3"
                    type="text"
                />
            </div>
            <div className="mr-4 mb-4">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Cena</label>
                <input
                    placeholder="Cena v €"
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red-300 rounded py-3 px-4 mb-3"
                    type="text"
                />
            </div>
            <div className="mr-4 mb-4">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Typ nehnuťeľnosti</label>
                <input
                    placeholder="Byt / dom"
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red-300 rounded py-3 px-4 mb-3"
                    type="text"
                />
            </div>
            <div className="mr-4 mb-4">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Lokalita</label>
                <input
                    placeholder="Petržalka, Miloslavov, atď.."
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red-300 rounded py-3 px-4 mb-3"
                    type="text"
                />
            </div>
            <div className="mr-4 mb-4">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Počet izieb</label>
                <input
                    placeholder="3"
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red-300 rounded py-3 px-4 mb-3"
                    type="text"
                />
            </div>
            <div className="mr-4 mb-4">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Rozloha</label>
                <input
                    placeholder="Rozloha v m2"
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red-300 rounded py-3 px-4 mb-3"
                    type="text"
                />
            </div>
            <div className="mr-4 mb-4">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Poschodie</label>
                <input
                    placeholder="5"
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red-300 rounded py-3 px-4 mb-3"
                    type="text"
                />
            </div>
            <div className="mr-4 mb-4">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Počet WC</label>
                <input
                    placeholder="1"
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red-300 rounded py-3 px-4 mb-3"
                    type="text"
                />
            </div>
            <div className="mr-4 mb-4">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Počet kúpeľní</label>
                <input
                    placeholder="1"
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red-300 rounded py-3 px-4 mb-3"
                    type="text"
                />
            </div>
            <div className="mr-4 mb-4">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Plyn</label>
                <input
                    placeholder="nie"
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red-300 rounded py-3 px-4 mb-3"
                    type="text"
                />
            </div>
            <div className="mr-4 mb-4">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Voda</label>
                <input
                    placeholder="áno"
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red-300 rounded py-3 px-4 mb-3"
                    type="text"
                />
            </div>
            <div className="mr-4 mb-4">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Elektrika</label>
                <input
                    placeholder="áno"
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red-300 rounded py-3 px-4 mb-3"
                    type="text"
                />
            </div>
            <div className="mr-4 mb-4">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Kanalizácia</label>
                <input
                    placeholder="áno"
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red-300 rounded py-3 px-4 mb-3"
                    type="text"
                />
            </div>
            <div className="mr-4 mb-4">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Balkón alebo lodžia</label>
                <input
                    placeholder="nie"
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red-300 rounded py-3 px-4 mb-3"
                    type="text"
                />
            </div>
        </form>
    </div>

        <span className="mr-2">Vyberte max 20 obrazkov</span>
        <input
          type="file"
          name="images"
          onChange={onSelectFile}
          multiple
          accept="image/png , image/jpeg, image/webp"
        />
      <br />

      

      {selectedImages.length > 0 &&
        (selectedImages.length > 20 ? (
          <p className="error">
            You can't upload more than 20 images! <br />
            <span>
              please delete <b> {selectedImages.length - 20} </b> of them{" "}
            </span>
          </p>
        ) : (
          <button
            className="mt-2 bg-green-500 hover:bg-green-700 text-white rounded p-4 text-sm w-full transition"
            onClick={() => {
              console.log(selectedImages);
            }}
          >
            UPLOAD {selectedImages.length} IMAGE
            {selectedImages.length === 1 ? "" : "S"}
          </button>
        ))}

      <div className="">
        {selectedImages &&
          selectedImages.map((image, index) => {
            return (
              <div key={image} className="w-full max-w-[152px] mx-auto inline-grid mr-2 mt-2">
                <img src={image} height="200" alt="upload" />
                <button className="bg-red-300 hover:bg-red-400 text-white rounded p-4 text-sm w-full transition" onClick={() => deleteHandler(image)}>
                  Zmazat
                </button>
             {/*<p>{index + 1}</p> */}
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Admin;
