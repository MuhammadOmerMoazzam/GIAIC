"use client"

import { Root, Item, Header, Trigger, Content } from "@radix-ui/react-accordion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "How we serve food?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
  {
    question: "How is our food quality?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
  {
    question: "How do we give home delivery?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
  {
    question: "How can we get in touch with you?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
  {
    question: "What will be delivered? And When?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
  {
    question: "Is this restaurant 24 hours open?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
]

export function FAQSection() {
  return (
    <div>
      <section className="py-16 lg:px-16 bg-white">

        <div className="max-w-[1320px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Questions Looks Here</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Root type="multiple" className="space-y-6">
              {faqs.slice(0, 3).map((faq, index) => (
                <Item key={index} value={`item-${index}`} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  <Header>
                    <Trigger className="flex items-center justify-between w-full text-left px-6 py-4 text-gray-900 hover:bg-gray-50">
                      <span className="text-lg font-medium">{faq.question}</span>
                      <Plus className="h-5 w-5 text-gray-500 transition-transform duration-200 ease-out group-data-[state=open]:hidden" />
                      <Minus className="h-5 w-5 text-gray-500 transition-transform duration-200 ease-out hidden group-data-[state=open]:block" />
                    </Trigger>
                  </Header>
                  <Content className="overflow-hidden text-gray-600 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    <div className="px-6 pb-4">{faq.answer}</div>
                  </Content>
                </Item>
              ))}
            </Root>

            <Root type="multiple" className="space-y-6">
              {faqs.slice(3).map((faq, index) => (
                <Item key={index} value={`item-${index + 3}`} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  <Header>
                    <Trigger className="flex items-center justify-between w-full text-left px-6 py-4 text-gray-900 hover:bg-gray-50">
                      <span className="text-lg font-medium">{faq.question}</span>
                      <Plus className="h-5 w-5 text-gray-500 transition-transform duration-200 ease-out group-data-[state=open]:hidden" />
                      <Minus className="h-5 w-5 text-gray-500 transition-transform duration-200 ease-out hidden group-data-[state=open]:block" />
                    </Trigger>
                  </Header>
                  <Content className="overflow-hidden text-gray-600 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    <div className="px-6 pb-4">{faq.answer}</div>
                  </Content>
                </Item>
              ))}
            </Root>
          </div>
        </div>
      </section>
    </div>
  )
}

