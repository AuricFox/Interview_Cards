# Flashcards

Flashcards is a program designed to assist with memorizing terms for tests or interviews. The application utilizes Python for the server-side functionality and HTML/CSS/JavaScript for the client-side user interface.

## Features

- **Flashcards for Interview Preparation**: Create and review flashcards tailored for job interviews, covering a wide range of topics from technical questions to behavioral inquiries.

- **Knowledge Refresh**: Use the flashcards to reinforce and refresh your memory, ensuring you are well-prepared for tests or exams. The flashcards can be used for subject or topic such as math, chemistry, biology, etc.

- **Server-Side**: The server-side of IFlashcards is powered by Flask, providing a lightweight and efficient web framework. SQLite3 is used as the database to manage flashcards and user data.

- **Client-Side**: The client-side interface is built using a combination of HTML, CSS, and JavaScript, offering a seamless and interactive user experience.

## Getting Started

To get started with Flashcards, follow these steps:

1. **Clone the Repository:**
    ```
    git clone https://github.com/AuricFox/Flashcards.git
    ```

2. **Navigate to the Project Directory:**
    ```
    cd Flashcards
    ```

3. **Setup Environment:**
    ```
    pip install virtualenv  
    virtualenv env

    .\env\Scripts\activate      # Windows
    source env/bin/activate     # Mac OS
    ```

4. **Install Dependencies:**
    ```
    (env) pip install flask
    (env) pip install tabulate
    ```

5. **Run Server:**
    ```
    (env) python app.py
    ```

    The server will start running, and you can access the application by navigating to `http://localhost:5000` in your web browser.

## Database Schema

Below is the schema of the database used for storing the flashcards:

### Figure Table

Stores blocks of code, the coding language, or the filename of the image for figures related to any flashcards. Currently, users can 
only store one type (image or code/type) to prevent the flashcard from getting cluttered.

- **fid (INTEGER)**: An autoincremented primary key.
- **code_block (TEXT)**: A block or snippet of code.
- **code_type (TEXT)**: The language that the code block is written in.
- **image_file (TEXT)**: A filename, not path, of the stored image.

### Flashcards Table

Stores the flashcard infomation and related figure id's for referencing. Users can create flashcards without a question or answer as long 
as there is an associated figure id attached, otherwise the card will not be saved.

- **cid (INTEGER)**: An autoincremented primary key.
- **category (TEXT, Not Null)**: The subject or topic of the question.
- **question (TEXT)**: The query being asked.
- **answer (TEXT)**: The expected response to the question.
- **qid (INTEGER)**: A foreign key referencing the Figure table for any figures related to the question.
- **aid (INTEGER)**: A foreign key referencing the Figure table for any figures related to the answer.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the [LICENSE](LICENSE) file for details.
