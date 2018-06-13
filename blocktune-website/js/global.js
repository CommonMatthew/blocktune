const swipeOutCSSClasses = (element, classToRemove, classToAdd) => {
    element.classList.remove(classToRemove);
    element.classList.add(classToAdd);
}