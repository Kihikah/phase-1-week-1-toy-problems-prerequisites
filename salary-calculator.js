function calculatePayee(taxableIncome) {
    if (taxableIncome <= 24000) {
        return taxableIncome * 0.10; // 10% tax for income up to 24,000
    } else if (taxableIncome <= 32333) {
        return 2400 + (taxableIncome - 24000) * 0.25; // 25% tax for income between 24,001 and 32,333
    } else if (taxableIncome <= 500000) {
        return 4483.25 + (taxableIncome - 32333) * 0.30; // 30% tax for income between 32,334 and 500,000
    } else if (taxableIncome <= 800000) {
        return 144783.25 + (taxableIncome - 500000) * 0.325; // 32.5% tax for income between 500,001 and 800,000
    } else {
        return 242283.25 + (taxableIncome - 800000) * 0.35; // 35% tax for income above 800,000
    }
}

// Function to calculate NHIF deductions based on gross salary
function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) return 150;
    else if (grossSalary <= 7999) return 300;
    else if (grossSalary <= 11999) return 400;
    else if (grossSalary <= 14999) return 500;
    else if (grossSalary <= 19999) return 600;
    else if (grossSalary <= 24999) return 750;
    else if (grossSalary <= 29999) return 850;
    else if (grossSalary <= 34999) return 900;
    else if (grossSalary <= 39999) return 950;
    else if (grossSalary <= 44999) return 1000;
    else if (grossSalary <= 49999) return 1100;
    else if (grossSalary <= 59999) return 1200;
    else if (grossSalary <= 69999) return 1300;
    else if (grossSalary <= 79999) return 1400;
    else if (grossSalary <= 89999) return 1500;
    else if (grossSalary <= 99999) return 1600;
    else return 1700;
}

// Function to calculate NSSF deductions (6% of gross salary, capped at 72,000)
function calculateNSSF(grossSalary) {
    const tierIILimit = 72000; // Maximum salary considered for NSSF deductions
    return 0.06 * Math.min(grossSalary, tierIILimit);
}

// Function to calculate SHIF (Social Health Insurance Fund) deductions (2.75% of gross salary)
function calculateSHIF(grossSalary) {
    return 0.0275 * grossSalary;
}

// Function to calculate Housing Levy deductions (1.5% of gross salary)
function calculateHousingLevy(grossSalary) {
    return 0.015 * grossSalary;
}

// Main function to calculate net salary
function netSalaryCalculator() {
    // Prompt user for basic salary and benefits
    const basicSalary = parseFloat(prompt("Enter basic salary: "));
    const benefits = parseFloat(prompt("Enter benefits: "));

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate deductions
    const payee = calculatePayee(grossSalary); // Income tax
    const nhif = calculateNHIF(grossSalary); // NHIF contribution
    const nssf = calculateNSSF(grossSalary); // NSSF contribution
    const shif = calculateSHIF(grossSalary); // SHIF contribution
    const housingLevy = calculateHousingLevy(grossSalary); // Housing Levy

    // Calculate total deductions
    const totalDeductions = payee + nhif + nssf + shif + housingLevy;

    // Calculate net salary
    const netSalary = grossSalary - totalDeductions;

    // Return 
    return {
        "Gross Salary": grossSalary,
        "PAYE (Tax)": payee,
        "NHIF Deductions": nhif,
        "NSSF Deductions": nssf,
        "SHIF Deductions": shif,
        "Housing Levy": housingLevy,
        "Total Deductions": totalDeductions,
        "Net Salary": netSalary,
    };
}

// Example test
console.log(netSalaryCalculator());
