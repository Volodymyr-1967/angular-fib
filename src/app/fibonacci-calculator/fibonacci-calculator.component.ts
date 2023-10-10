
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import BigNumber from 'bignumber.js';

@Component({
  selector: 'app-fib-calc',
  templateUrl: './fibonacci-calculator.component.html',
  styleUrls: ['./fibonacci-calculator.component.css']
})
export class FibonacciCalculatorComponent implements OnInit {
  fibonacciForm!: FormGroup;
  fibonacciResult!: BigNumber;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.fibonacciForm = this.formBuilder.group({
      inputValue: ['', [Validators.required, Validators.pattern(/^\d+$/)]]
    });
  }

  calculateFibonacci() {
    if (this.fibonacciForm.valid) {
      const n = parseInt(this.fibonacciForm.value.inputValue);
      this.fibonacciResult = this.fibonacciIterative(n);
    } else {
      alert('Введите целое число в поле ввода.');
    }
  }

  fibonacciIterative(n: number): BigNumber {
    if (n <= 1) {
      return new BigNumber(n);
    }

    let fib1 = new BigNumber(0);
    let fib2 = new BigNumber(1);

    for (let i = 2; i <= n; i++) {
      const temp = fib2;
      fib2 = fib1.plus(fib2);
      fib1 = temp;
    }

    return fib2;
  }
}


// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from "@angular/forms";
//
// @Component({
//   selector: 'app-fib-calc',
//   templateUrl: './fibonacci-calculator.component.html',
//   styleUrls: ['./fibonacci-calculator.component.css']
// })
// export class FibonacciCalculatorComponent implements OnInit{
//   fibonacciResult!: number;
//   form!: FormGroup;
//
//   constructor(private formBuilder: FormBuilder) { }
//
//   ngOnInit(): void {
//     this.form = this.formBuilder.group({
//       inputValue: ['', [Validators.required, Validators.pattern(/^\d+$/)]]
//     });
//   }
//
//   calculateFibonacci() {
//     if (this.form.valid) {
//       const n = parseInt(this.form.value.inputValue);
//       this.fibonacciResult = this.fibonacciIterative(n);
//     } else {
//       alert('Введите целое число в поле ввода.');
//     }
//   }
//
//   fibonacciIterative(n: number): number {
//     if (n <= 1) {
//       return n;
//     }
//     let fib = [0, 1];
//     for (let i = 2; i <= n; i++) {
//       fib[i] = fib[i - 1] + fib[i - 2];
//     }
//     return fib[n];
//   }
// }
