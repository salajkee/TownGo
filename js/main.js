//Tabs

const tabs = document.querySelectorAll('.tabs__item'),
tabsContent = document.querySelectorAll('.afisha__catalog'),
tabsParent = document.querySelector('.tabs');

function hideTabContent() {
    tabsContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
    });

    tabs.forEach(item => {
        item.classList.remove('tabs__item-active');
    });
}

function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabs__item-active');
}

hideTabContent();
showTabContent();

tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('tabs__item')) {
        tabs.forEach((item, i) => {
            if (target == item) {
                hideTabContent();
                showTabContent(i);
            }
        });
    }
});