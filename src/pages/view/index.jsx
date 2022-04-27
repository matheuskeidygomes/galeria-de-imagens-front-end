import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Layout from "../../components/layout";
import Area from "../../components/area";
import Header from "../../components/header";
import ViewOne from "../../components/view";
import { api } from '../../services/api';

export default function View() {

    const [image, setImage] = useState({});
    const { id } = useParams();

    useEffect(() => {

        getImage();

    }, []);

    async function getImage() {

        let result = await fetch(`${api}images/${id}`);
        let json = await result.json();
        setImage(json.image);
    }

    async function delImage(id) {

        try {
    
          await fetch(`${api}images/${id}`, {
            method: 'DELETE',
          });
    
          alert("Imagem deletada com sucesso!");
    
          window.location.href = '/';
    
        } catch (error) {
    
          alert(error);
        }
    
      }

    return <>

        <Layout>

            <Area>

                <Header />

                <ViewOne title={image.imageTitle} link={`${api}${image.path}`} onClick={()=> delImage(image.id)} />

            </Area>

        </Layout>

    </>
}

