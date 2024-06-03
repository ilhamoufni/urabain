
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DocumentsTable.css';

const DocumentsTable = () => {
    const [documents, setDocuments] = useState([]);
    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const response = await axios.get('http://localhost:3001/documents');
                setDocuments(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des documents:', error);
            }
        };

        fetchDocuments();
    }, []);

    return (
        <div className="table-container">
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>provinces</th>
                    <th>communes</th>
                    <th>centres</th>
                    <th>intitule_de_documents</th>
                    <th>responsables</th>
                    <th>collaborateurs</th>
                    <th>bet</th>
                    <th>situations</th>
                    <th>observations</th>
                    <th>observations_chef_département</th>
                    <th>piece_jointes</th>
                </tr>
            </thead>
            <tbody>
                {documents.map((doc) => (
                    <tr key={doc.id}>
                        <td>{doc.id}</td>
                        <td>{doc.provinces}</td>
                        <td>{doc.communes}</td>
                        <td>{doc.centres}</td>
                        <td>{doc.intitule_de_documents}</td>
                        <td>{doc.responsables}</td>
                        <td>{doc.collaborateurs}</td>
                        <td>{doc.bet}</td>
                        <td>{doc.situations}</td>
                        <td>{doc.observations}</td>
                        <td>{doc.observations_chef_département}</td>
                        <td>{doc.piece_jointes}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
};

export default DocumentsTable;