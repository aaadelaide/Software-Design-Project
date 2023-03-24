import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { FuelQuote } from "./FuelQuote";

describe("FuelQuote", () => {
  it("renders the form with initial state", () => {
    const { getByLabelText, getByText } = render(<FuelQuote />);
    const gallonsInput = getByLabelText("Gallons Needed:");
    const addressInput = getByLabelText("Delivery Address:");
    const deliveryDateInput = getByLabelText("Delivery Date:");
    const pricePerGallonLabel = getByText("2.5");
    const estimatedTotalLabel = getByText("$0.00");
    const submitButton = getByText("Get Quote");

    expect(gallonsInput.value).toBe("0");
    expect(addressInput.value).toBe("");
    expect(deliveryDateInput.value).toBe("");
    expect(pricePerGallonLabel.textContent).toBe("2.5");
    expect(estimatedTotalLabel.textContent).toBe("$0.00");
    expect(submitButton).toBeInTheDocument();
  });

  it("updates state when inputs change", () => {
    const { getByLabelText } = render(<FuelQuote />);
    const gallonsInput = getByLabelText("Gallons Needed:");
    const addressInput = getByLabelText("Delivery Address:");
    const deliveryDateInput = getByLabelText("Delivery Date:");

    fireEvent.change(gallonsInput, { target: { value: "10" } });
    fireEvent.change(addressInput, { target: { value: "123 Main St." } });
    fireEvent.change(deliveryDateInput, {
      target: { value: "2023-03-25" },
    });

    expect(gallonsInput.value).toBe("10");
    expect(addressInput.value).toBe("123 Main St.");
    expect(deliveryDateInput.value).toBe("2023-03-25");
  });

  it("truncates address input to 100 characters", () => {
    const { getByLabelText } = render(<FuelQuote />);
    const addressInput = getByLabelText("Delivery Address:");

    fireEvent.change(addressInput, {
      target: { value: "123 Main St. " + "A".repeat(95) },
    });

    expect(addressInput.value.length).toBe(100);
  });

  it("calculates quote correctly on form submission", () => {
    const { getByLabelText, getByText } = render(<FuelQuote />);
    const gallonsInput = getByLabelText("Gallons Needed:");
    const addressInput = getByLabelText("Delivery Address:");
    const deliveryDateInput = getByLabelText("Delivery Date:");
    const submitButton = getByText("Get Quote");
  
    fireEvent.change(gallonsInput, { target: { value: "10" } });
    fireEvent.change(addressInput, { target: { value: "123 Main St." } });
    fireEvent.change(deliveryDateInput, {
      target: { value: "2023-03-25" },
    });
    fireEvent.submit(submitButton);
  
    const estimatedTotalLabel = getByText("$25.00");
    expect(estimatedTotalLabel.textContent).toBe("$25.00");
  });
  
});

