/*
 *
 * HomePage
 *
 */

import React, { useState, useEffect } from "react";
import axios from "axios";

const docToken =
  "Bearer a6092358d17ff4ebe4c8cf19a096127c43e95d0be12cdc17989d9f2d0bb186f1e9a16a7cb9122d740daa971e3d592c2f14ea091b287566cb71a3b7099f926a1b44a6e95939426f3b6590d49d5a74152845c43b4387d18c85b5bbb85843c51227fd03506bef4e46d879a308a8f9a2a4b57d0e1b986fc0fb49bad9bf12b172ed74";
const config = {
  headers: {
    Authorization: docToken,
  },
};

const HomePage = () => {
  const [version, setVersion] = useState("");
  const [slogan, setSlogan] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:8082/global/config`,
          config
        );

        const data = response.data;

        setVersion(data.version);
        setSlogan(data.slogan);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const [cexData, setCexData] = useState({
    version: "",
    slogan: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const pluginData = {
        data: cexData,
      };

      console.log({ pluginData });

      const result = await axios.put(
        `http://localhost:8082/global/config`,
        pluginData,
        config
      );

      console.log({ result });

    } catch (err) {
      console.error(`Plugins.Global.handleSubmit: ${err.message}`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCexData({ ...cexData, [name]: value });
  };

  return (
    <div>
      <h1>My Plugin's HomePage</h1>
      <p>Happy coding</p>
      <p>Version: {version}</p>
      <p>Slogan: {slogan}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="version">Version</label>
        <input
          type={"text"}
          id="version"
          name="version"
          onChange={(e) => handleChange(e)}
          defaultValue={version}
        ></input>
        <label htmlFor="slogan">Slogan</label>
        <input
          type={"text"}
          id="slogan"
          name="slogan"
          onChange={(e) => handleChange(e)}
          defaultValue={slogan}
        ></input>
        <button type="submit">UPLOAD DATA</button>
      </form>
    </div>
  );
};

export default HomePage;
