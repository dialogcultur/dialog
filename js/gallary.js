(function() {
    function createItem(active, name, format = 'jpg') {
        return `
            <li class="col-sm-2 ${active}">
                <a href="images/gallary/${name}.${format}" class="venobox vbox-item">
                    <div class="block-img">
                    <div class="background-img" style="background-image: url(&quot;images/gallary/${name}.${format}&quot;); background-position: initial;">
                        <img alt="" src="images/gallary/${name}.${format}" style="display: none;">
                    </div>
                    </div>
                </a>
            </li>
        `
    }

    function createItemOther(active, name, format = 'jpg') {
        return `
            <li class="col-sm-2 ${active}">
                <a href="images/gallary/other/${name}.${format}" class="venobox vbox-item">
                    <div class="block-img">
                    <div class="background-img" style="background-image: url(&quot;images/gallary/other/${name}.${format}&quot;); background-position: initial;">
                        <img alt="" src="images/gallary/other/${name}.${format}" style="display: none;">
                    </div>
                    </div>
                </a>
            </li>
        `
    }

    function init() {
        const galleryBlock = document.querySelector('.block-gallery');
        const galleryBlockOther = document.querySelector('.block-gallery.other')
        let items = '';
        let itemOther = '';


        for (let i = 1; i <= 20; i++) {
            if (i === 1) {
                items += createItem('active', i);
            } else {
                items += createItem('', i);
            }
        }

        for (let i = 1; i <= 54; i++) {
            itemOther += createItemOther('', i);
        }

        galleryBlock.innerHTML = items;
        galleryBlockOther.innerHTML = itemOther;
    }

    init()
})()
