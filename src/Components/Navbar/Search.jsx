import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import './Navbar.css'
const Search2 = ({ loading, setLoading, onChange, suggestion }) => {
  const [inputText, setInputText] = useState("");
  const [active, setActive] = useState(0);
  const navigate=useNavigate()
  const handelInput = (e) => {
    setInputText(e.target.value);
    onChange(e.target.value);
    setLoading(true);
  };
  // console.log(suggestion)

  //clearing data
  const handelClear = () => {
    setInputText(" ");
    onChange("");
    setLoading(false);
  };

  //user have clck on wich key
  const handelkeyUp = (e) => {
    //   console.log(e.keyCode,e.code);

    switch (e.keyCode) {
      //aerro down 40
      case 40:
        if (active >= 5) {
          setActive(0);
        } else {
          setActive((prev) => prev + 1);
        }
        break;
      //aerro up 38
      case 38:
        if (active <= 0) {
          setActive(5);
        } else {
          setActive((prev) => prev - 1);
        }
        break;
        //enter
      case 13:
        // navigate(`/search/${e.id}`)
        break;
      default:
        return;
    }
  };

  return (
    <>
      <SearchWrapper len={suggestion.length} onKeyUp={handelkeyUp}>
        <InputBox
          value={inputText}
          placeholder="Search"
          onChange={handelInput}
        />
        <RightSide>
          {/* if inputbox is there then show the cross btn */}
          {inputText && (
            <ImageBox
              onClick={handelClear}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAAD8/PxPT09SUlJMTExRUVFXV1dHR0dKSkpYWFhERERdXV1BQUFFRUXj4+OXl5fY2Nj29vapqam9vb0rKyu0tLQlJSVoaGicnJyUlJRjY2MNDQ07Oztvb28tLS3i60RjAAAF9ElEQVR4nO2dbVvqMAyG2XxDERkiKJzj8f//yyPggLE+WbslWeOV+7M2TZu3taWdTBzHcRzHcRzHcRzHcRzHcRzHcRzHcRzHcXLkdbmqqs1i1D4sNlW1Wr6KtF3u3osDszeR9mN4mx+78L4r+RtfrIsTf/ibj+Lj3IV3dlNaFJd8CgxhJ+W80QdmFct1o/Viqq9iOW12Yc3bhV1xxZ22iuXddRd2nM2/vl83rz6L01YP1pwRddlqvijmjO13Mw/0YMnY/irQvqahtk10z4pRQhUSoKjiTVB+xShhG5RQzHVULF/C4reMMjZhEcWLhorXaeLEhlHIAsgobuRVLO+RcNacD+zk2xc5pQQJBpk9U1Yxb0iMuC+G0sQR5g+ADyhINKKG08SBD25ZeCzv5VTEPihRcODRlCvgHlVl6o7ngRmUKBPDCZ8QEUgMqZjVEGMqII2wGTnP1xQKU7BoDtYzHG2XOINqRGbB5S2UM5MuFHEA5zSe8OeSgK2EwKPLlzSwDyqU+pMSjy9TAUd4u9JHN04aPAWchpV0QHgJQ+s6nk5DRLrhKo6WJhoQ2ep2YDceYMuPuiu0OC/eDmoXK6i07HVGxlCxD0pUvjSEL/b3F5wmNH3wBB7vvoaKTZR31SkanDT6mRS2Cr00cQXvmPPbBAN41NOTBh4uwaWubvjGPTsfrOHyHezT90I9jwaPfYqKWMGhNRIDuHMP0Z3jGSYxiBo1sgWiFhXteTRDg8TwIRKHCPQR/82ZcsTAs/DQ+b9PAy1ACaIMF/tPZfBM0MFiyOwrg+eCShp4YEZP9G36zIYRH6xJT9tEJaPa82jwjISDBmHYyj2PBs/JU+Cvn5PnPAPwOkt7VvCMZ6xgSrdTBiMrcLhpdhwPRaZB5gyem0tfNOmDNTGzEzvTmYLnp65TcJoIxdwMwTN0VAAPQfY+WEPPEVYws68JCsJQif0OIyZ6BKuIMaUgZahwdsfucio43IQxE2TOpBnq89jd7UOKisZ8sCbeFw2liSaxs2h0BvfEqWjSB2twGX7GYBS9pDtpmMuD13QZqmkTPUKr+AsUpA3VuA/+UP7FGuazfTYEKvGbDzN7aD80nOxrumKpeRW7a1PjhhrzlWg6nsbVpYYNNaYq3WNiGTgEXuC/xsBSfojYGTQ7i2nrNAZ9MXU50dxCBt7wRhjzReyDuAw35YvEQaDS+N7hEXx4iN57yuQ0aTc4yBy/6M1vr3WfVTNuqMSB2NPfDDtyOzLYBy8XnbChZnlk75KuPfwaYi8/77UbrOB1EDF4bG9PytE9k4eGsIKhhV+DKmITDS9UEH+fpy/G+2BNTGLJCPxDPfztZypp9DsIRBRwuRlquokewWs5mfki0dGO/+w7NMr08cEaE7447FuBOHKbi6EO/YFk9r8/HH4JCB6imWjPI8E+GF9CE79/Gt1QiQOxKdUljsWjXjdAd43r9/gjl+H4UqzUrzxsqLpXozchLjbjvBdD/Q7/E8wXYuVxBVZkl/qtmBEDNo6K+Oq/vistefkicfVf/5JZ4u6p3hA3mQ5oFRu+etLAaeJ33NdWEncLid25pxluiDQxfIMsi6Qh6y24jFC7OVHKB2sIX2RpvwuiVOP6DiC+VzQu2ZVJE02ICyLlVcRf9JybmyNedo1LNd5lo7HyInVLM7Mo8RunU8Xyr22OcWFyid8pkVifxr4o9TghfHdJ6n0L7XBD3P8slYjxkEpUN8QMypXEeFAFZvETChPcXSAM9ZNb1ljvPeHozfzeE36zS3pnAZf5vG92QTnyiwtwFlnHdtS386Avcr6dh94/1FlYQNUN5/uH4Vc65ev8H0Ci4nzDMqyh3lGCcMHP+Q7p6G/JBsMN51uyv/894MCbzsovhgTCDeubzm1HVN9HaH98c7ph+2117RmctNfZv5i70Mz56m++HGj6IutbuXsWX+fG2R85jeTfxQyyK/htJdWPpU6Zn6lN4O0n968rGSN6Xa6q7UZg8BJYbLbVaskaRR3HcRzHcRzHcRzHcRzHcRzHcRzHcRzHcdj4D+0eMU7TQZJNAAAAAElFTkSuQmCC"
              style={{ cursor: "pointer" }}
            />
          )}
          {/* if loading then show spinner only */}

          {loading && (
            <StyledSpinner viewBox="0 0 50 50">
              <circle
                className="path"
                cx="25"
                cy="25"
                r="20"
                fill="none"
                strokeWidth="4"
              />
            </StyledSpinner>
          )}
        </RightSide>
      </SearchWrapper>

      {/* searchingbox */}

      {!loading && suggestion.length > 0 && (
        <SuggestionBox len={suggestion.length} limit={5} active={active}>
          {suggestion.map((e, index) => (
            <Box key={e.id} onMouseOver={() => setActive(index + 1)}>
          
           <Link className="go" to={`/search/${e}`} > {e}</Link>
            </Box>
          ))}
        </SuggestionBox>
      )}
    </>
  );
};

export default Search2;

const Box = styled.div`
  background-color: #ffffffef;
  text-decoration: none;
  color: black;
`;

const SuggestionBox = styled.div`
  display: flex;
  width: 48%;
  flex-direction: column;
  margin-top: 50px;
  /* border: 1px solid greenyellow; */
  /* opacity: 0.8; */
  position: relative;
  flex: 0 0 auto;
  max-height: 260px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-color: ${(len) => (len ? "transparent" : "transparent")};
  /* everything inside it  */

  & * {
    flex: 1;
    text-align: left;
    padding: 15px;
  }

  //if any of them have active prop..
  & :nth-child(${({ active }) => active}) {
    background: #e0e0e0;
    color: black;
    font-weight: 650;
    cursor: pointer;
  }

  //hide addition data show only 5
  & :nth-child(n + ${({ limit }) => limit + 1}) {
    display: none;
  }
`;

const SearchWrapper = styled.div`
  border: 1px solid lightgray;
  width: 45%;
  height: 30px;
  padding-left: 10px;
  position: absolute;
  border-radius: 5px;
  top: 48px;
  left: 15%;
  display: flex;
  align-items: center;
  border-bottom-left-radius: ${({ len }) => (len ? "0px" : "5px")};
  border-bottom-right-radius: ${({ len }) => (len ? "0px" : "5px")};
`;

const ImageBox = styled.img`
  height: 20px;
  padding-right: 20px;
`;

const InputBox = styled.input`
  border: none;
  outline: none;
  font-size: 20px;
  width: 85%;
`;

const RightSide = styled.div`
  display: flex;
  margin-left: -1px;
`;

const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  width: 20px;
  height: 20px;

  & .path {
    stroke: #5652bf;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
