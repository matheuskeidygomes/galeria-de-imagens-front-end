import React, { useState, useRef, useEffect } from "react";
import Layout from "../../components/layout";
import Area from "../../components/area";
import Header from "../../components/header";
import Content from "../../components/content";
import ImageItem from "../../components/imageItem";
import Input from "../../components/input";
import { api } from '../../services/api';

export default function Home() {

  const [title, setTitle] = useState('');
  const [imageList, setImageList] = useState([]);
  const fileField = useRef();

  useEffect(() => {

    getImages();

  }, []);

  async function submitImage(e) {

    e.preventDefault();

    const fData = new FormData();
    fData.append('imageTitle', title);

    if (fileField.current.files.length > 0) {
      for (let i = 0; i < fileField.current.files.length; i++) {
        fData.append('file', fileField.current.files[i]);
      }
    }

    let result = await fetch(`${api}upload`, {
      method: 'POST',
      body: fData
    });

    let json = await result.json();

    if(!json.error) {

      alert("Imagem adicionada com sucesso!");
      window.location.href = '/';

    } else {

      alert(json.error);
    }

  }

  async function getImages() {

    let result = await fetch(`${api}images`);
    let json = await result.json();
    setImageList(json.images);

  }

  return <>

    <Layout>

      <Area>

        <Header />

        <Input title={title} onChange={(e) => setTitle(e.target.value)} onSubmit={(e) => submitImage(e)} fileField={fileField} />

        <Content>

          {imageList.map((image, index) => {
            return <ImageItem key={index} link={`${api}${image.path}`} title={`${image.imageTitle}`} id={image.id} />
          })}

        </Content>

      </Area>

    </Layout>

  </>
}
