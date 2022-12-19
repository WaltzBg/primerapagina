const marvel = {
    render: ()=>{
        let contenidoHTML= '';
        const urlAPI= 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=f970f57e9f4f425fef6f90ea6be3a8a0&hash=896e66a59ef8b12800e02c76576e57ff';
        fetch(urlAPI)
            .then (res => res.json())
            .then((json)=>{
                for(const psj of json.data.results){
                    let urlPsj = psj.urls[0].url;
                    contenidoHTML += `
                        <div class="col-md-4">
                            <a href="${urlPsj}" target="_blank">
                                <img src = "${psj.thumbnail.path}.${psj.thumbnail.extension}"  alt = "${psj.name}" class="img-thumbnail"/>  
                            </a>
                            <h3 class="nombre">${psj.name}</h3>
                        </div>`;
                }
                const contenedor = document.querySelector('#marvel-row');
                contenedor.innerHTML = contenidoHTML;
            })
    }
};
marvel.render();