const images= {
  bella: {
    path: './assets/bb1.jpeg',
    description: 'Mi bonita, amo tu sonrisa.'
  },
  amor: {
    path: './assets/bb2.jpeg',
    description: 'Preciosa de ojitos bonitos.'
  },
  bonita: {
    path: './assets/bb3.jpeg',
    description: 'Me vuelves loquito.'
  },
  hermosa: {
    path: './assets/bb4.jpeg',
    description: 'Te extraño.'
  },
  linda: {
    path: './assets/bb5.jpeg',
    description: 'Me pierdo en tu mirada.'
  },
  default: {
    path: './assets/default.png',
    description: 'Buscame, solo tengo fotos lindas!!'
  }
}

const imgPatterns = {
  bella: 'bella',
  amor: 'amor',
  bonita: 'bonita',
  hermosa: 'hermosa',
  linda: 'linda'
}

const img = document.getElementById('love-img');
const imgDescription = document.getElementById('love-img-description');
const searchBox = document.getElementById('love-searchbox');

const setImageAttributes = (path, description)  => {
  if(path !== images.default.path)
  {
    img.classList.add('transitioning-src');
    setTimeout(() => {
      img.classList.remove('transitioning-src');
      img.setAttribute('src', path);
      imgDescription.innerText = description;
    }, 400); 
  }
  else{
      img.setAttribute('src', path);
      imgDescription.innerText = description;
  }
}

searchBox.addEventListener('input', ({ target: { value } }) => {
  if(value)
  {
    const toLowerValue = String(value).toLocaleLowerCase().trim();
    if (imgPatterns.bonita == toLowerValue)
    {
      setImageAttributes(images.bonita.path, images.bonita.description);
      return;
    } 
    else if (imgPatterns.amor == toLowerValue)
    {
      setImageAttributes(images.amor.path, images.amor.description);
      return;
    }
    else if (imgPatterns.bella == toLowerValue)
    {
      setImageAttributes(images.bella.path, images.bella.description);
      return;
    }
    else if (imgPatterns.hermosa == toLowerValue)
    {
      setImageAttributes(images.hermosa.path, images.hermosa.description);
      return;
    }
    else if (imgPatterns.linda == toLowerValue)
    {
      setImageAttributes(images.linda.path, images.linda.description);
      return;
    }
  }
  setImageAttributes(images.default.path, images.default.description);
})