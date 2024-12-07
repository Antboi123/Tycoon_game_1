Let cash = 1000000; // Initial cash
Let materials = 10000; // Initial materials
Let labor = 1000; // Initial labor
Let equipment = 100; // Initial equipment
Let industry = null; // Selected industry
Let research = 0; // Research level
Let market = 0; // Market trend

// Industry data
Const industries = {
    Retail: {
        productionCost: 1000,
        sellingPrice: 1500,
        materialRequirement: 10,
        laborRequirement: 5,
        equipmentRequirement: 1
    },
    Manufacturing: {
        productionCost: 5000,
        sellingPrice: 10000,
        materialRequirement: 50,
        laborRequirement: 20,
        equipmentRequirement: 5
    },
    Energy: {
        productionCost: 10000,
        sellingPrice: 20000,
        materialRequirement: 100,
        laborRequirement: 50,
        equipmentRequirement: 10
    },
    Technology: {
        productionCost: 20000,
        sellingPrice: 50000,
        materialRequirement: 200,
        laborRequirement: 100,
        equipmentRequirement: 20
    },
    Healthcare: {
        productionCost: 50000,
        sellingPrice: 100000,
        materialRequirement: 500,
        laborRequirement: 200,
        equipmentRequirement: 50
    }
};

// Research data
Const researchData = {
    productionEfficiency: {
        cost: 10000,
        effect: 0.1
    },
    costReduction: {
        cost: 20000,
        effect: 0.2
    },
    sellingPriceIncrease: {
        cost: 50000,
        effect: 0.5
    }
};

// Market trends
Const marketTrends = {
    demandIncrease: {
        effect: 1.5
    },
    demandDecrease: {
        effect: 0.5
    }
};

// Update game state
Function updateGameState() {
    cashElement.textContent = cash;
    materialsElement.textContent = materials;
    laborElement.textContent = labor;
    equipmentElement.textContent = equipment;
}

// Select industry
Function selectIndustry(industryName) {
    Industry = industryName;
    messageElement.textContent = `Selected industry: ${industryName}`;
}

// Produce goods
Function produce() {
    If (industry) {
        Const industryData = industries[industry];
        Const productionCost = industryData.productionCost;
        Const materialRequirement = industryData.materialRequirement;
        Const laborRequirement = industryData.laborRequirement;
        Const equipmentRequirement = industryData.equipmentRequirement;

        If (cash >= productionCost && materials >= materialRequirement && labor >= laborRequirement && equipment >= equipmentRequirement) {
            Cash -= productionCost;
            Materials -= materialRequirement;
            Labor -= laborRequirement;
            Equipment -= equipmentRequirement;

            Materials += materialRequirement * 2; // Produce goods

            messageElement.textContent = `Produced goods for ${industry}.`;
        } else {
            messageElement.textContent = “Insufficient resources to produce goods.”;
        }
    } else {
        messageElement.textContent = “Select an industry to produce goods.”;
    }

    updateGameState();
}

// Sell goods
Function sell() {
    If (industry) {
        Const industryData = industries[industry];
        Const sellingPrice = industryData.sellingPrice;
        Const materialRequirement = industryData.materialRequirement;

        If (materials >= materialRequirement) {
            Cash += sellingPrice * materialRequirement;
            Materials -= materialRequirement;

            messageElement.textContent = `Sold goods for ${industry}.`;
        } else {
            messageElement.textContent = “Insufficient goods to sell.”;
        }
    } else {
        messageElement.textContent = “Select an industry to sell goods.”;
    }

    updateGameState();
}

// Expand industry
Function expand() {
    If (industry) {
        Const industryData = industries[industry];
        Const expansionCost = industryData.productionCost * 2;

        If (cash >= expansionCost) {
            Cash -= expansionCost;
            Labor += industryData.laborRequirement * 2;
            Equipment += industryData.equipmentRequirement * 2;

            messageElement.textContent = `Expanded ${industry} operations.`;
        } else {
            messageElement.textContent = “Insufficient funds to expand operations.”;
        }
    } else {
        messageElement.textContent = “Select an industry to expand operations.”;
    }
