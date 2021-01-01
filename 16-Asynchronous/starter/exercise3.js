'use strict'

const wait = function(seconds) {
  return new Promise(function(resolve) {
    setTimeout(resolve, seconds * 1000)
  })
}

const imgContainer = document.querySelector('.images')

const createImage = function(imgPath) {
  return new Promise(function(resolve, reject) {
    const img = document.createElement('img')
    img.src = imgPath

    img.addEventListener('load', function() {
      imgContainer.append(img)
      resolve(img)
    })

    img.addEventListener('error', function() {
      reject(new Error('Image not found'))
    })
  })
}

// loadPalse
const loadNPause = async function() {
  try {
    // Load image1
    let img = await createImage('img/img-1.jpg')
    console.log('Image 1 loaded')
    await wait(2)
    img.style.display = 'none'

    // Load image2
    img = await createImage('img/img-2.jpg')
    console.log('Image2 loaded')
    await wait(2)
    img.style.display = 'none'
  } catch (err) {
    console.log(err)
  }
}

// loadNPause()

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img))
    const imgsEL = await Promise.all(imgs)
    console.log(imgsEL)
    imgsEL.forEach(img => img.classList.add('parallel'))
  } catch (err) {
    console.error(err)
  }
}

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'])