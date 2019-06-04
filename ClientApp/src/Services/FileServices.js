export const fileServices = {
  uploadImages,
  downloadImages,
  modifyTitle,
  modifyDescription,
  deleteImage,
};

function uploadImages(userImages) {
  return new Promise((resolve, reject) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'collection/multiple' },
      body: userImages,
    };

    fetch('/files/upload', requestOptions)
      .then((data) => {
        const response = JSON.parse(data);
        if (response.ok) {
          resolve();
        } else {
          reject('error uploading images');
        }
      });
  });
}

function downloadImages(userId) {
  return new Promise((resolve, reject) => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'collection/multiple' },
      body: JSON.stringify(userId),
    };

    let returnedImages = [];
    fetch('/files/download', requestOptions)
      .then((data) => {
        const response = JSON.parse(data);
        if (response.ok) {
          returnedImages = response.images;
        } else {
          console.log('files downloading error');
        }
      }).then(() => {
        resolve(returnedImages);
      });
  });
}

function modifyTitle(userImageData) {
  return new Promise((resolve, reject) => {
    const requestOptions = {
      method: 'PUT',
      body: JSON.stringify({
        id: userImageData.id,
        key: userImageData.key,
        title: userImageData.value,
      }),
    };

    fetch('/files/modifyTitle', requestOptions)
      .then(() => {
        resolve();
      });
  });
}

function modifyDescription(userImageData) {
  return new Promise((resolve, reject) => {
    const requestOptions = {
      method: 'PUT',
      body: JSON.stringify({
        id: userImageData.id,
        key: userImageData.key,
        description: userImageData.value,
      }),
    };

    fetch('/files/modifyDescription', requestOptions)
      .then(() => {
        resolve();
      });
  });
}

function deleteImage(userImageData) {
  return new Promise((resolve, reject) => {
    const requestOptions = {
      method: 'DELETE',
      body: JSON.stringify({
        id: userImageData.id,
        key: userImageData.key,
      }),
    };

    fetch('/files/deleteImage', requestOptions)
      .then(() => {
        resolve();
      });
  });
}
