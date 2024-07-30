import { render } from "@testing-library/react";
import { GifItem } from "../../../src/GifExpertApp/components/GifItem";
import React from "react";

describe("Tests for GifItem", () => {
  test("should match with snapshot", () => {
    render(<GifItem id={""} title={""} url={""} />);
    
  });
});
