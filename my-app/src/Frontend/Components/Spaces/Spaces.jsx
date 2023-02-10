import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import PopupCom from "./PopupCom";

const Spaces = () => {
  const gridChildStyle = {
    padding: "5px",
    boxShadow: "0 0 2px black",
    width: "170px",
    height: "230px",
    borderRadius: "20px",
    backgroundColor: "white",
  };

  return (
    <>
      <div style={{ backgroundColor: "#e6e7e8" }}>
        <div style={{ display: "flex", margin: "40px", gap: "10px" }}>
          <div style={{ width: "30%" }}></div>

          <div style={{ width: "60%" }}>
            <div>
              <div
                style={{
                  display: "flex",
                  boxShadow: "0 0 2px black",
                  justifyContent: "space-around",
                  height: "120px",
                  padding: "5px",
                  backgroundColor: "white",
                }}
              >
                <div style={{ marginTop: "-15px" }}>
                  <h4>Welcome to Spaces!</h4>
                  <p style={{ font: "small-caption" }}>
                    Follow Spaces to explore your interests on Quora.
                  </p>
                  <button
                    style={{
                      color: "blue",
                      padding: "5px",
                      border: "1px solid blue",
                      borderRadius: "20px",
                    }}
                  >
                    <PopupCom />
                  </button>
                  &nbsp; &nbsp;
                  <button
                    style={{
                      color: "blue",
                      padding: "5px",
                      border: "1px solid blue",
                      borderRadius: "20px",
                    }}
                  >
                    ☸ Discover Space
                  </button>
                </div>

                <div>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://quoraadsupport.zendesk.com/hc/article_attachments/360093561172/Quora_illustration_group.png"
                    width="300px"
                    height="120px"
                  />
                </div>
              </div>
            </div>
            <div style={{}}>
              <h4>Discover Spaces</h4>
              <p>Spaces you might like</p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: " repeat(4, 170px)",
                  gap: "20px",
                }}
              >
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-1586844-320x64-nsfyvacbssszdtdnrrvofaorvgbvwgkl.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>India Tourism</h5>
                  <p style={{ font: "small-caption" }}>
                    All type of Topic on Travel in the Incredible India &
                    Overseas
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-1578131-320x64-pnzqpolqwcndyjzrliihipcjculwqfhg.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>Trawellblogger's Guides</h5>
                  <p style={{ font: "small-caption" }}>
                    Travel Guides, Travel Stories & Experiences, Travel Tips,
                    Travel Reviews
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qsf.cf2.quoracdn.net/-4-ans_frontend_assets.images.tribes.defaults.space_banner_blue.png-26-4eaf49a49fb008b5.png"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>STARTUPS - Strategies/Tips/Ideas</h5>
                  <p style={{ font: "small-caption" }}>
                    Learn/gain some knowledge from already succeeded
                    "Startup-Stories"
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-1578272-320x64-xkzlsuiulfukjtgkpxymmbzrjomhgahh.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>Next_Billionaire</h5>
                  <p style={{ font: "small-caption" }}>
                    Start-up, Entrepreneurship, Business, Cryptocurrency, Hard
                    Motivation
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-1897021-320x64-airxydaekihjlyhlqavwufokxbndjxtd.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>YouTube ♧ promote</h5>
                  <p style={{ font: "small-caption" }}>
                    You can promote your YouTube videos and channel.
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-1582162-320x64-vvvywqtgxzzgfvnocygsvqtgyjvpvtom.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>Business ideas</h5>
                  <p style={{ font: "small-caption" }}>
                    All about Related to Business
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-1585305-320x64-dsnqvwowyebhavxltaomscosnmpflizf.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>Fitness and Nutrition</h5>
                  <p style={{ font: "small-caption" }}>
                    𝐖𝐞𝐢𝐠𝐡𝐭 𝐋𝐨𝐬𝐬💪 𝐃𝐢𝐞𝐭 𝐧 𝐍𝐮𝐭𝐫𝐢𝐭𝐢𝐨𝐧🥑𝐌𝐮𝐬𝐜𝐥𝐞 𝐆𝐚𝐢𝐧🏋️
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-1583775-320x64-juwwdacthhbydhwgswpetvcyyoyvcitk.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>Chemistry</h5>
                  <p style={{ font: "small-caption" }}>
                    All about chemistry knowledge sharing and update
                  </p>
                </div>

                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-1589659-320x64-lyuyxwvrxicfatkhsooksxnjxdbkhlpd.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>Startup Era</h5>
                  <p style={{ font: "small-caption" }}>
                    Best way to boost economy.
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-1618076-320x64-ddcpimoroieazyolspabfydwcswrwddj.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>Business & Sales Consult</h5>
                  <p style={{ font: "small-caption" }}>
                    This space is about business consulting and sales training
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-2432528-320x64-lkhwwkzjregtnenahwwyqcoakijktylz.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>Business Stories & strategy</h5>
                  <p style={{ font: "small-caption" }}>
                    Stories and Strategy of successful businesses to get
                    inspire.
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-2073399-320x64-wywwbowqjwhxsmxywrxclvdgwnqcfghg.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>Memekaze</h5>
                  <p style={{ font: "small-caption" }}>Memes</p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-1586844-320x64-nsfyvacbssszdtdnrrvofaorvgbvwgkl.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>India Tourism</h5>
                  <p style={{ font: "small-caption" }}>
                    All type of Topic on Travel in the Incredible India &
                    Overseas
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-1578131-320x64-pnzqpolqwcndyjzrliihipcjculwqfhg.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>Trawellblogger's Guides</h5>
                  <p style={{ font: "small-caption" }}>
                    Travel Guides, Travel Stories & Experiences, Travel Tips,
                    Travel Reviews
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qsf.cf2.quoracdn.net/-4-ans_frontend_assets.images.tribes.defaults.space_banner_blue.png-26-4eaf49a49fb008b5.png"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>STARTUPS - Strategies/Tips/Ideas</h5>
                  <p style={{ font: "small-caption" }}>
                    Learn/gain some knowledge from already succeeded
                    "Startup-Stories"
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-1578272-320x64-xkzlsuiulfukjtgkpxymmbzrjomhgahh.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>Next_Billionaire</h5>
                  <p style={{ font: "small-caption" }}>
                    Start-up, Entrepreneurship, Business, Cryptocurrency, Hard
                    Motivation
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-1897021-320x64-airxydaekihjlyhlqavwufokxbndjxtd.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>YouTube ♧ promote</h5>
                  <p style={{ font: "small-caption" }}>
                    You can promote your YouTube videos and channel.
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-1582162-320x64-vvvywqtgxzzgfvnocygsvqtgyjvpvtom.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>Business ideas</h5>
                  <p style={{ font: "small-caption" }}>
                    All about Related to Business
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-1585305-320x64-dsnqvwowyebhavxltaomscosnmpflizf.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>Fitness and Nutrition</h5>
                  <p style={{ font: "small-caption" }}>
                    𝐖𝐞𝐢𝐠𝐡𝐭 𝐋𝐨𝐬𝐬💪 𝐃𝐢𝐞𝐭 𝐧 𝐍𝐮𝐭𝐫𝐢𝐭𝐢𝐨𝐧🥑𝐌𝐮𝐬𝐜𝐥𝐞 𝐆𝐚𝐢𝐧🏋️
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-1583775-320x64-juwwdacthhbydhwgswpetvcyyoyvcitk.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>Chemistry</h5>
                  <p style={{ font: "small-caption" }}>
                    All about chemistry knowledge sharing and update
                  </p>
                </div>

                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-1589659-320x64-lyuyxwvrxicfatkhsooksxnjxdbkhlpd.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>Startup Era</h5>
                  <p style={{ font: "small-caption" }}>
                    Best way to boost economy.
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-1618076-320x64-ddcpimoroieazyolspabfydwcswrwddj.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>Business & Sales Consult</h5>
                  <p style={{ font: "small-caption" }}>
                    This space is about business consulting and sales training
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-2432528-320x64-lkhwwkzjregtnenahwwyqcoakijktylz.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>Business Stories & strategy</h5>
                  <p style={{ font: "small-caption" }}>
                    Stories and Strategy of successful businesses to get
                    inspire.
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-2073399-320x64-wywwbowqjwhxsmxywrxclvdgwnqcfghg.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>Memekaze</h5>
                  <p style={{ font: "small-caption" }}>Memes</p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-1586844-320x64-nsfyvacbssszdtdnrrvofaorvgbvwgkl.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>India Tourism</h5>
                  <p style={{ font: "small-caption" }}>
                    All type of Topic on Travel in the Incredible India &
                    Overseas
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-1578131-320x64-pnzqpolqwcndyjzrliihipcjculwqfhg.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>Trawellblogger's Guides</h5>
                  <p style={{ font: "small-caption" }}>
                    Travel Guides, Travel Stories & Experiences, Travel Tips,
                    Travel Reviews
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qsf.cf2.quoracdn.net/-4-ans_frontend_assets.images.tribes.defaults.space_banner_blue.png-26-4eaf49a49fb008b5.png"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>STARTUPS - Strategies/Tips/Ideas</h5>
                  <p style={{ font: "small-caption" }}>
                    Learn/gain some knowledge from already succeeded
                    "Startup-Stories"
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-1578272-320x64-xkzlsuiulfukjtgkpxymmbzrjomhgahh.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>Next_Billionaire</h5>
                  <p style={{ font: "small-caption" }}>
                    Start-up, Entrepreneurship, Business, Cryptocurrency, Hard
                    Motivation
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-1897021-320x64-airxydaekihjlyhlqavwufokxbndjxtd.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>YouTube ♧ promote</h5>
                  <p style={{ font: "small-caption" }}>
                    You can promote your YouTube videos and channel.
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-1582162-320x64-vvvywqtgxzzgfvnocygsvqtgyjvpvtom.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>Business ideas</h5>
                  <p style={{ font: "small-caption" }}>
                    All about Related to Business
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-1585305-320x64-dsnqvwowyebhavxltaomscosnmpflizf.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>Fitness and Nutrition</h5>
                  <p style={{ font: "small-caption" }}>
                    𝐖𝐞𝐢𝐠𝐡𝐭 𝐋𝐨𝐬𝐬💪 𝐃𝐢𝐞𝐭 𝐧 𝐍𝐮𝐭𝐫𝐢𝐭𝐢𝐨𝐧🥑𝐌𝐮𝐬𝐜𝐥𝐞 𝐆𝐚𝐢𝐧🏋️
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-1583775-320x64-juwwdacthhbydhwgswpetvcyyoyvcitk.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>Chemistry</h5>
                  <p style={{ font: "small-caption" }}>
                    All about chemistry knowledge sharing and update
                  </p>
                </div>

                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-1589659-320x64-lyuyxwvrxicfatkhsooksxnjxdbkhlpd.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>Startup Era</h5>
                  <p style={{ font: "small-caption" }}>
                    Best way to boost economy.
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-1618076-320x64-ddcpimoroieazyolspabfydwcswrwddj.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>Business & Sales Consult</h5>
                  <p style={{ font: "small-caption" }}>
                    This space is about business consulting and sales training
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-2432528-320x64-lkhwwkzjregtnenahwwyqcoakijktylz.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>Business Stories & strategy</h5>
                  <p style={{ font: "small-caption" }}>
                    Stories and Strategy of successful businesses to get
                    inspire.
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-2073399-320x64-wywwbowqjwhxsmxywrxclvdgwnqcfghg.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>Memekaze</h5>
                  <p style={{ font: "small-caption" }}>Memes</p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-1586844-320x64-nsfyvacbssszdtdnrrvofaorvgbvwgkl.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>India Tourism</h5>
                  <p style={{ font: "small-caption" }}>
                    All type of Topic on Travel in the Incredible India &
                    Overseas
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-1578131-320x64-pnzqpolqwcndyjzrliihipcjculwqfhg.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>Trawellblogger's Guides</h5>
                  <p style={{ font: "small-caption" }}>
                    Travel Guides, Travel Stories & Experiences, Travel Tips,
                    Travel Reviews
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qsf.cf2.quoracdn.net/-4-ans_frontend_assets.images.tribes.defaults.space_banner_blue.png-26-4eaf49a49fb008b5.png"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>STARTUPS - Strategies/Tips/Ideas</h5>
                  <p style={{ font: "small-caption" }}>
                    Learn/gain some knowledge from already succeeded
                    "Startup-Stories"
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-1578272-320x64-xkzlsuiulfukjtgkpxymmbzrjomhgahh.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>Next_Billionaire</h5>
                  <p style={{ font: "small-caption" }}>
                    Start-up, Entrepreneurship, Business, Cryptocurrency, Hard
                    Motivation
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-1897021-320x64-airxydaekihjlyhlqavwufokxbndjxtd.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>YouTube ♧ promote</h5>
                  <p style={{ font: "small-caption" }}>
                    You can promote your YouTube videos and channel.
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-1582162-320x64-vvvywqtgxzzgfvnocygsvqtgyjvpvtom.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>Business ideas</h5>
                  <p style={{ font: "small-caption" }}>
                    All about Related to Business
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-1585305-320x64-dsnqvwowyebhavxltaomscosnmpflizf.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>Fitness and Nutrition</h5>
                  <p style={{ font: "small-caption" }}>
                    𝐖𝐞𝐢𝐠𝐡𝐭 𝐋𝐨𝐬𝐬💪 𝐃𝐢𝐞𝐭 𝐧 𝐍𝐮𝐭𝐫𝐢𝐭𝐢𝐨𝐧🥑𝐌𝐮𝐬𝐜𝐥𝐞 𝐆𝐚𝐢𝐧🏋️
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-1583775-320x64-juwwdacthhbydhwgswpetvcyyoyvcitk.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>Chemistry</h5>
                  <p style={{ font: "small-caption" }}>
                    All about chemistry knowledge sharing and update
                  </p>
                </div>

                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-1589659-320x64-lyuyxwvrxicfatkhsooksxnjxdbkhlpd.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>Startup Era</h5>
                  <p style={{ font: "small-caption" }}>
                    Best way to boost economy.
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-1618076-320x64-ddcpimoroieazyolspabfydwcswrwddj.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>Business & Sales Consult</h5>
                  <p style={{ font: "small-caption" }}>
                    This space is about business consulting and sales training
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-2432528-320x64-lkhwwkzjregtnenahwwyqcoakijktylz.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>Business Stories & strategy</h5>
                  <p style={{ font: "small-caption" }}>
                    Stories and Strategy of successful businesses to get
                    inspire.
                  </p>
                </div>
                <div style={gridChildStyle}>
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    src="https://qph.cf2.quoracdn.net/main-custom-tc-2073399-320x64-wywwbowqjwhxsmxywrxclvdgwnqcfghg.jpeg"
                    alt=""
                    width="170px"
                    height="70px"
                  />

                  <h5>Memekaze</h5>
                  <p style={{ font: "small-caption" }}>Memes</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ width: "40%" }}>
            <div>
              <div
                style={{
                  width: "200px",
                  height: "150px",
                  boxShadow: "0 0 1px black",
                  margin: "30px 0 0 30px",
                  textAlign: "center",
                  backgroundColor: "white",
                }}
              >
                <h4 style={{ padding: "15px 0 0 0" }}> Pending Invites</h4>
                <hr />

                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    class="icon_svg-stroke"
                    stroke="#666"
                    stroke-width="1.5"
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                  >
                    <path d="M4.5 6.5h15v12h-15z"></path>
                    <path
                      stroke-linecap="round"
                      d="M4.5 7.5 12 14l7.5-6.5"
                    ></path>
                  </g>
                </svg>
                <p style={{ font: "small-caption" }}>No invites</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Spaces;
