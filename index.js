const prompt = require("prompt-sync")({ sigint: true });

let todos = [];

function generateUniqueId() {
  // TODO: Implementasi fungsi untuk menghasilkan ID unik
  // Ini akan digunakan secara internal untuk setiap objek to-do
  // Contoh: Gabungan waktu saat ini dan angka acak
  return Date.now() + Math.floor(Math.random() * 1000).toString();
}

function addTodo() {
  // TODO: Implementasi logika untuk menambah to-do baru
  // 1. Minta input teks to-do dari user menggunakan `prompt()`
  // 2. Validasi input: Pastikan teks tidak kosong atau hanya spasi
  // 3. Buat objek to-do baru dengan properti: id (dari generateUniqueId), text, dan isCompleted (boolean, default false)
  // 4. Tambahkan objek to-do ini ke array `todos`
  // 5. Beri feedback ke user bahwa to-do berhasil ditambahkan
  let inputText = "";
  inputText = prompt("Please add what you are going to do: ");
  if (inputText.trim() === "" || inputText === null) {
    console.log("Your input todo activity can not be empty");
    return;
  }

  let tempObjToDo = {
    id: generateUniqueId(),
    text: inputText,
    isCompleted: false,
  };

  todos.push(tempObjToDo);
  console.log(
    'New to-do: "' +
      tempObjToDo.text +
      '" activity has been successfully inserted'
  );
}

function markTodoCompleted() {
  // TODO: Implementasi logika untuk menandai to-do sebagai selesai
  // 1. Panggil `listTodos()` untuk menampilkan daftar to-do
  // 2. Minta user memasukkan NOMOR to-do yang ingin ditandai sebagai selesai
  // 3. Validasi input: Pastikan nomor adalah angka, dalam rentang yang valid (1 sampai jumlah to-do)
  // 4. Ubah properti `isCompleted` dari to-do yang dipilih menjadi `true`
  // 5. Beri feedback ke user bahwa to-do berhasil ditandai selesai
  // 6. Tangani kasus jika to-do sudah selesai

  listTodos();
  let inputToDoNum = prompt(
    "Please type to-do number that want to be marked as completed: "
  );
  inputToDoNum = parseInt(inputToDoNum.trim());

  if (inputToDoNum > 0 && inputToDoNum <= todos.length) {
    todos[inputToDoNum - 1].isCompleted = true;
    console.log(
      "Your To-Do Number: " +
        inputToDoNum +
        ". " +
        " has been successfully marked as completed"
    );
  } else {
    console.log("Invalid number. Please enter a valid number from the list.");
    /*todos[inputToDoNum - 1].isCompleted = true;
    console.log(
      "Your To-Do Number: " +
        inputToDoNum +
        ". " +
        " has been successfully marked as completed"
    );*/
    console.log("Successfully marked as completed");
  }
}

function deleteTodo() {
  // TODO: Implementasi logika untuk menghapus to-do
  // 1. Panggil `listTodos()` untuk menampilkan daftar to-do
  // 2. Minta user memasukkan NOMOR to-do yang ingin dihapus
  // 3. Validasi input: Pastikan nomor adalah angka, dalam rentang yang valid
  // 4. Hapus to-do yang dipilih dari array `todos`
  // 5. Beri feedback ke user bahwa to-do berhasil dihapus

  listTodos();
  let inputToDoNum = prompt(
    "Please type to-do number that want to be removed: "
  );

  if (inputToDoNum.trim() === "") {
    console.log("Invalid number. Please enter a valid number from the list.");
    return;
  }

  if (!isNaN(inputToDoNum.trim())) {
    inputToDoNum = parseInt(inputToDoNum.trim());

    if (todos.length > 0) {
      if (inputToDoNum < 1 || inputToDoNum > todos.length) {
        console.log(
          "Invalid number. Please enter a valid number from the list."
        );
        return;
      } else {
        //let deletedText = todos[inputToDoNum - 1].text;
        todos.splice(inputToDoNum - 1, 1);
        console.log(
          "Your To-Do Number: " +
            inputToDoNum +
            " has been successfully deleted"
        );
      }
    }
  }
}

function listTodos() {
  // TODO: Implementasi logika untuk menampilkan semua to-do
  // 1. Tampilkan judul daftar (misal: "--- YOUR TO-DO LIST ---")
  // 2. Cek apakah array `todos` kosong. Jika ya, tampilkan pesan "No to-dos to display."
  // 3. Jika tidak kosong, iterasi (loop) melalui array `todos`
  // 4. Untuk setiap to-do, tampilkan nomor urut, status ([DONE] atau [ACTIVE]), dan teks to-do
  //    Contoh format: "1. [ACTIVE] | Belajar JavaScript"
  // 5. Tampilkan garis penutup daftar
  if (todos.length === 0) {
    console.log("No to-dos to display.");
  } else {
    console.log("***  YOUR TO-DO LIST  ***\n");

    for (let toDoNum in todos) {
      let toDoStatus = "[DONE]";
      if (!todos[toDoNum].isCompleted) {
        toDoStatus = "[ACTIVE]";
      }

      let toDoId = parseInt(toDoNum) + 1;
      console.log(toDoId + ". " + toDoStatus + " | " + todos[toDoNum].text);
      console.log("\n");
    }
    console.log("\n*************************\n");
  }
}

function runTodoApp() {
  // TODO: Implementasi logika utama aplikasi (menu interaktif)
  // Ini adalah "otak" aplikasi yang terus berjalan sampai user memilih untuk keluar
  let running = true;
  while (running) {
    // 1. Tampilkan menu perintah yang tersedia (add, complete, delete, list, exit)
    // 2. Minta user memasukkan perintah menggunakan `prompt()`
    // 3. Gunakan `switch` statement atau `if/else if` untuk memanggil fungsi yang sesuai
    //    berdasarkan perintah yang dimasukkan user
    // 4. Tangani perintah 'exit' untuk menghentikan loop aplikasi
    // 5. Tangani input perintah yang tidak valid
    console.log("*************************\n");
    console.log("***      WELCOME      ***\n");
    console.log("*************************\n\n");
    console.log("This program consists of 5 menus as follow:\n");
    console.log("1. Add\n");
    console.log("2. Complete\n");
    console.log("3. Delete\n");
    console.log("4. List\n");
    console.log("5. Exit\n");
    let inputMenuNum = prompt("Please type Menu number that want to perform: ");
    inputMenuNum = Number(inputMenuNum.trim());

    /*if (isNaN(inputMenuNum) || inputMenuNum < 1 || inputMenuNum > 5) {
      console.log(
        "Please input a valid Menu Number. Only Menu number 1 to 5 is allowed"
      );
    }*/

    switch (inputMenuNum) {
      case 1:
        addTodo();
        break;
      case 2:
        markTodoCompleted();
        break;
      case 3:
        deleteTodo();
        break;
      case 4:
        listTodos();
        break;
      case 5:
        running = false;
        break;
      default:
        console.log(
          "Please input a valid Menu Number. Only Menu number 1 to 5 is allowed"
        );
    }
  }
}

// Jangan ubah bagian di bawah ini. Ini adalah cara Node.js menjalankan fungsi utama
// dan mengekspor fungsi-fungsi untuk pengujian (jika nanti ada).

if (require.main === module) {
  runTodoApp();
}

module.exports = {
  todos,
  generateUniqueId,
  addTodo,
  markTodoCompleted,
  deleteTodo,
  listTodos,
  runTodoApp,
};
