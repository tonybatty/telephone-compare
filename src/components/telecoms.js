import React from "react";
import "../styles/components/telecoms.scss";

const Telecoms = () => (
  <section className="container telecoms">
    <div className="content">
      <h1 className="telecoms__title">Understanding Telecoms</h1>
      <div className="telecoms-content">
        <div className="telecoms-item">
          <div className="box ">
            <p className="telecoms-item__title">ADSL</p>
            <p className="telecoms-item__info">
              ADSL (Asymmetric Digital Subscriber Line) transforms the existing
              copper lines between the telephone exchange and your telephone
              socket into a high-speed digital line, giving you Broadband
              access.
            </p>
          </div>
        </div>
        <div className="telecoms-item">
          <div className="box ">
            <p className="telecoms-item__title">FTTC</p>
            <p className="telecoms-item__info">
              FTTC (Fibre To The Cabinet) is a method of internet connectivity
              that involves both fibre and copper cabling. The cable between the
              telephone exchange and the green street cabinet is fibre optic.
              The green street cabinet to the premises is connected by a copper
              cable.
            </p>
          </div>
        </div>
        <div className="telecoms-item">
          <div className="box ">
            <p className="telecoms-item__title">FTTP</p>
            <p className="telecoms-item__info">
              FTTP (Fibre To The Premises) is a method of internet connectivity
              that uses only fibre optic cables. The cable between the telephone
              exchange and the green street cabinet is fibre optics and then the
              cable from the cabinet to the premises is also fibre optics.
            </p>
          </div>
        </div>
        <div className="telecoms-item">
          <div className="box ">
            <p className="telecoms-item__title">Leased Line</p>
            <p className="telecoms-item__info">
              A leased line is a dedicated fibre optic line that runs directly
              from the nearest fibre connection straight into a premises. A
              leased line is separate from all other connections and therefore,
              rarely suffers downtime and isn’t affected by 'peak times'.
            </p>
          </div>
        </div>
        <div className="telecoms-item">
          <div className="box ">
            <p className="telecoms-item__title">SIP Trunk</p>
            <p className="telecoms-item__info">
              A SIP Trunk is, in essence, an internet phone line. A SIP Trunk is
              the part of your broadband line that is 'sectioned off' and used
              to make and receive calls. A SIP Trunk cannot be used for internet
              access - only to make and receive VoIP Calls.
            </p>
          </div>
        </div>
        <div className="telecoms-item">
          <div className="box ">
            <p className="telecoms-item__title">PBX</p>
            <p className="telecoms-item__info">
              PBX (Private Branch Exchange) is a fancy way of saying 'telephone
              system'. A PBX is a telephone exchange that serves a private
              business or organisation and provides communication between
              telephones within the organization.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Telecoms;
