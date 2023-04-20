(function() {
    const countPhotoGallary = {
        architectureProjectOrLayout: 2,
        drawingAndPainting: 14,
        architecturalAndArtisticComposition: 5,
        photo: 9,
        communicationDesign: 0,
        interiorEnvironmentDesign: 2,
        artsAndCrafts: 7,
        industrialDesign: 0
    }

    const namePhotoGallary = {
        architectureProjectOrLayout: 'Архитектура (проект или макет)',
        drawingAndPainting: 'Рисунок и живопись',
        architecturalAndArtisticComposition: 'Архитектурно-художественная композиция',
        photo: 'Фотография',
        communicationDesign: 'Коммуникативный дизайн',
        interiorEnvironmentDesign: 'Дизайн среды (интерьера)',
        artsAndCrafts: 'Декоративно-прикладное искусство',
        industrialDesign: 'Индустриальный дизайн',
    }

    const queryPath = location.search?.replace("?", "")?.split("=")[1];


    function createItem(active, name, format = 'jpg') {
        return `
            <li class="col-sm-2 ${active}">
                <a href="images/gallary/concurs/${queryPath}/${name}.${format}" class="venobox vbox-item">
                    <div class="block-img">
                    <div class="background-img" style="background-image: url(&quot;images/gallary/concurs/${queryPath}/${name}.${format}&quot;); background-position: initial;">
                        <img alt="" src="images/gallary/concurs/${queryPath}/${name}.${format}" style="display: none;">
                    </div>
                    </div>
                </a>
            </li>
        `
    }

    function init() {
        const galleryBlock = document.querySelector('.block-gallery');
        const title = document.querySelector('.title-text');
        let items = '';

        title.innerHTML = namePhotoGallary[queryPath];

        if (!parseInt(countPhotoGallary[queryPath])) {
            return;
        }


        for (let i = 1; i <= parseInt(countPhotoGallary[queryPath]); i++) {
            if (i === 1) {
                items += createItem('active', i);
            } else {
                items += createItem('', i);
            }
        }

        galleryBlock.innerHTML = items;
    }

    init()
})()
