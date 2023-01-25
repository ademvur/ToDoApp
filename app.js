// !ekle düğmesi için işlevsellik oluşturacak, böylece düğme tıklandığında, giriş değeri listeye yeni bir liste öğesi olarak eklenecektir. Ek olarak, her yeni liste öğesi için, tıklandığında o liste öğesini kaldıracak bir silme düğmesi oluşturur. Kod ayrıca, sırasıyla "toplam" ve "tamamlanan" aralıkları kullanılarak görüntülenen listedeki toplam öğe sayısını ve tamamlanan öğe sayısını takip eder.
// DOM öğelerine referans aldim-degerlere atadim
const inputField = document.getElementById('todo-input')
const addButton = document.getElementById('todo-button')
const todoList = document.getElementById('todo-ul')
const toplamSpan = document.getElementById('toplam')
const tamamlananSpan = document.getElementById('tamamlanan')

// değişkenlerini başlatmak icin atadim
let toplam = 0
let tamamlanan = 0

// Ekle dügmesine ulasarak fonkyiyonala ulastim
// value giris degerini alliriz
// Yeni liste öğesi oluşturuz
// Silme düğmesi oluştup innerHTML ile icine yazdirdim
// Sil düğmesi için fonksiyon olusturdum
// Liste öğesini kaldırRemove yönteniyle kadrirabilirim.
// değişkenlerini güncelledim(Update )
// listede tamamlananlari gösterdim Update

addButton.addEventListener('click', function () {
  const inputValue = inputField.value

  const newListItem = document.createElement('li')
  newListItem.innerHTML = inputValue

  const deleteButton = document.createElement('button')
  deleteButton.innerHTML = 'Delete'
  newListItem.appendChild(deleteButton)

  deleteButton.addEventListener('click', function () {
    newListItem.remove()

    toplam--
    if (!newListItem.classList.contains('completed')) {
      tamamlanan--
    }

    toplamSpan.innerHTML = toplam
    tamamlananSpan.innerHTML = tamamlanan
  })

  // Yapılacaklar listesine yeni liste öğesi eklenir
  todoList.appendChild(newListItem)

  // Giriş alanınındaki degeri temizler hiclik degeri verdim.
  inputField.value = ''

  // değişkenlerini artirarak  güncelledim
  toplam++

  toplamSpan.innerHTML = toplam
  tamamlananSpan.innerHTML = tamamlanan
})
