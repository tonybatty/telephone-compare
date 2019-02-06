import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../styles/components/suppliers.scss";
import supplierLogo from "../images/company.png";

const Suppliers = () => (
  <Layout>
    <SEO title="Suppliers" />
    <div className="container suppliers">
      <div className="content">
        <h1 className="page-title">Suppliers</h1>
        <div className="supplier-card">
          <div className="supplier-card__logo">
            <img src={supplierLogo} alt="supplier logo" />
          </div>
          <div className="supplier-card__info">
            <p className="supplier-card__info__title"> Telecoms Company</p>
            <p className="supplier-card__info__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              finibus sem a sem ultrices, eget sagittis magna tempor. Quisque
              pulvinar lorem molestie sapien ornare cursus. Praesent eget
              volutpat est. Proin at sagittis ex. Duis quis dui magna. Nullam
              urna purus, blandit vitae tincidunt ut, scelerisque eu sem.
            </p>
            <button>View Supplier →</button>
          </div>
        </div>
        <div className="supplier-card">
          <div className="supplier-card__logo">
            <img src={supplierLogo} alt="supplier logo" />
          </div>
          <div className="supplier-card__info">
            <p className="supplier-card__info__title"> Telecoms Company</p>
            <p className="supplier-card__info__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              finibus sem a sem ultrices, eget sagittis magna tempor. Quisque
              pulvinar lorem molestie sapien ornare cursus. Praesent eget
              volutpat est. Proin at sagittis ex. Duis quis dui magna. Nullam
              urna purus, blandit vitae tincidunt ut, scelerisque eu sem.
            </p>
            <button>View Supplier →</button>
          </div>
        </div>
        <div className="supplier-card">
          <div className="supplier-card__logo">
            <img src={supplierLogo} alt="supplier logo" />
          </div>
          <div className="supplier-card__info">
            <p className="supplier-card__info__title"> Telecoms Company</p>
            <p className="supplier-card__info__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              finibus sem a sem ultrices, eget sagittis magna tempor. Quisque
              pulvinar lorem molestie sapien ornare cursus. Praesent eget
              volutpat est. Proin at sagittis ex. Duis quis dui magna. Nullam
              urna purus, blandit vitae tincidunt ut, scelerisque eu sem.
            </p>
            <button>View Supplier →</button>
          </div>
        </div>
        <div className="supplier-card">
          <div className="supplier-card__logo">
            <img src={supplierLogo} alt="supplier logo" />
          </div>
          <div className="supplier-card__info">
            <p className="supplier-card__info__title"> Telecoms Company</p>
            <p className="supplier-card__info__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              finibus sem a sem ultrices, eget sagittis magna tempor. Quisque
              pulvinar lorem molestie sapien ornare cursus. Praesent eget
              volutpat est. Proin at sagittis ex. Duis quis dui magna. Nullam
              urna purus, blandit vitae tincidunt ut, scelerisque eu sem.
            </p>
            <button>View Supplier →</button>
          </div>
        </div>
        <div className="supplier-card">
          <div className="supplier-card__logo">
            <img src={supplierLogo} alt="supplier logo" />
          </div>
          <div className="supplier-card__info">
            <p className="supplier-card__info__title"> Telecoms Company</p>
            <p className="supplier-card__info__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              finibus sem a sem ultrices, eget sagittis magna tempor. Quisque
              pulvinar lorem molestie sapien ornare cursus. Praesent eget
              volutpat est. Proin at sagittis ex. Duis quis dui magna. Nullam
              urna purus, blandit vitae tincidunt ut, scelerisque eu sem.
            </p>
            <button>View Supplier →</button>
          </div>
        </div>
      </div>{" "}
    </div>
  </Layout>
);

export default Suppliers;
