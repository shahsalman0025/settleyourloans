import React from "react";
import Header from "../components/Header";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import SocialHeader from "../components/socialheader";

const faqs = [
  {
    question: "What is loan settlement?",
    answer:
      "Loan settlement is a process by which you negotiate and settle the loan repayment at a value lower than the total outstanding.",
  },
  {
    question: "What type of debt can be settled through “Settleloans”?",
    answer:
      "We help you in settling unsecured loans like credit cards, personal loans, business loans. We do not help you settle secured loans, collateral based, home and car loans.",
  },
  {
    question: "How much time does it take to settle the debt?",
    answer:
      "It may vary from case to case but average settlement takes usually between 1 to 2 years.",
  },
  {
    question:
      "Will I be charged interest and late fee on my loans? How do I handle the calls from bank recovery agents?",
    answer:
      "You may continue to get calls from the bank or recovery agents. However, do note that they are bound to follow certain code of conduct as laid down by RBI and Supreme Court of India. You can redirect the calls to our team and our legal team will handle the communication as per the laid down guidelines and laws of the country.",
  },
  {
    question: "How much can I save when I settle my loan?",
    answer:
      "It may vary from case to case but average savings could be 50% of the value of loan outstanding.",
  },
  {
    question: "Is the loan settlement guaranteed?",
    answer: "Yes. Guarantee is mentioned in the legal agreement.",
  },
  {
    question: "Is debt settlement legal in India?",
    answer: "Yes, it is perfectly legal.",
  },
  // More questions...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function FAQ() {
  return (
    <>
      <a href="https://api.whatsapp.com/send/?phone=919821219819&text&type=phone_number&app_absent=0" class="float" target="_blank">
        <i class="fab fa-whatsapp xl"></i>
      </a>
      <SocialHeader />
      <Header />
      <div className="bg-gray-50 pt-56">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
            <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                          <span className="font-medium text-gray-900">
                            {faq.question}
                          </span>
                          <span className="ml-6 h-7 flex items-center">
                            <ChevronDownIcon
                              className={classNames(
                                open ? "-rotate-180" : "rotate-0",
                                "h-6 w-6 transform"
                              )}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base text-gray-500">{faq.answer}</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
