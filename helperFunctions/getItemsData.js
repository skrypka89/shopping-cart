//Get initial data about price and heading of each shop item
export default function getItemsData(initialItems) {
  const initialData = [];

  initialItems.forEach(initialItem =>
    initialData.push({
      heading: initialItem.querySelector('.heading').firstChild.data.trim(),
      price: parseFloat(
        initialItem.querySelector('.price').firstChild.data.trim().replace(/,/, '')
      )
    })
  );

  return initialData;
}