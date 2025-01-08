# Medical Report Analyzer

## Introduction
The Medical Report Analyzer is a comprehensive healthcare solution designed to bridge the gap between medical information and user understanding. Our project aims to simplify medical report interpretation, provide reliable medicine information, and offer nutritional insights through an AI-powered platform. We combine FDA data with advanced AI capabilities to ensure users have access to accurate, understandable medical information at their fingertips.

🔗 **Live Website**: [https://team-dedsec-catnip.vercel.app/](https://team-dedsec-catnip.vercel.app/)

## API Routes

```javascript
/app/api/analyze
```
Analyzes food product images to provide ingredient details, nutritional insights, and dietary information (e.g., vegan, halal). Suggests healthier alternatives and flags potential health concerns.

```javascript
/app/api/chat
```
A medical chatbot answering user queries about medicines using verified data from the FDA or AI-generated content. Provides information such as medicine name, uses, warnings, and dosage.

```javascript
/app/api/extractreportgemini
```
Extracts key findings from clinical report images, identifies abnormal biomarkers, and summarizes the report in a concise way, highlighting numerical values and key health information.

```javascript
/app/api/gemini-search
```
Allows users to search for detailed medical information about medicines, querying the FDA for official data or using AI to provide relevant details such as descriptions, uses, warnings, and dosages.

```javascript
/app/api/medichatgemini
```
A medical chat service powered by AI (Gemini), answering queries about medicines. It offers reliable and understandable information based on official sources, covering uses, side effects, and recommended dosages.

```javascript
/app/api/medicine
```
Provides detailed information about specific medicines, fetching data from the FDA or generating content using AI. It presents details like medicine name, indications, side effects, and dosage recommendations.

## Pages

### Food Page
Upload or select a food product image to analyze its ingredients, nutritional value, and dietary information. Provides insights to make health-conscious decisions.

### Report Page
View and update medical reports with a chat interface to interact with the medical assistant. Easily manage reports and receive guidance through conversations.

### Search Medicine Page
Search for medicines, view detailed information, and chat about the selected medicine. Access essential details like warnings, dosage, and usage instantly.

## API Keys Used

### FDA API
Provides detailed information on medicines, such as usage, dosage, warnings, and side effects. Serves as the primary source for medicine-related data.

### Gemini API
Delivers additional information when the FDA API does not return a result. Provides further context on the medicine, ensuring a comprehensive response.

## Medical Report Analysis with RAG and Pinecone

This project uses Pinecone and RAG (Retrieval-Augmented Generation) to enhance a medical chatbot with comprehensive medical knowledge and personalized patient data, providing accurate and tailored responses.

### Key Features:
- **Comprehensive Medical Database:** Includes reliable medical sources like textbooks and guidelines.
- **Personalized Responses:** Integrates patient history for customized diagnostic recommendations.
- **Efficient Data Storage:** Medical documents are split into chunks and stored in Pinecone for fast retrieval.
- **Context-Aware LLM:** Uses Hugging Face's LLM to generate responses based on retrieved data.
- **Next.js UI:** A user-friendly interface for seamless interaction.

### Architecture Diagram:
![image](https://github.com/user-attachments/assets/f1e06762-e780-46bd-9a10-2fc7ae8d2b8e)

## Project Installation Steps

### 1. Main Project Installation

#### Install Dependencies
```bash
npm install
```

#### Run the Project
```bash
npm run dev
```

The application will run on [http://localhost:3000](http://localhost:3000)

### 2. Uploading Book to Pinecone

#### Install Dependencies
```bash
npm install
```

#### Setup Environment Variables
- Create a .env file in the root directory
- Add your PINECONE_API_KEY by signing up at [Pinecone](https://www.pinecone.io/) and creating an index

**Example .env file:**
```env
PINECONE_API_KEY=your-pinecone-api-key
```

#### Add Documents
- Create a folder named `documents` in the project root
- Place your medical PDF files in this folder for processing and uploading to Pinecone

#### Run the Project
```bash
npm run dev
```

The application will run on [http://localhost:3000](http://localhost:3000)