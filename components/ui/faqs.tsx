import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type FaqItem = {
  id: string;
  title: string;
  content: string;
};

type FaqsProps = {
  title: string;
  description: string;
  items: FaqItem[];
  supportText?: React.ReactNode;
  defaultValue?: string;
};

export function Faqs({
  title,
  description,
  items,
  supportText,
  defaultValue,
}: FaqsProps) {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-7 px-4 pt-16">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
        <p className="text-muted-foreground mx-auto max-w-2xl">{description}</p>
      </div>
      <Accordion
        type="single"
        collapsible
        className="bg-card dark:bg-card/50 w-full -space-y-px rounded-lg"
        defaultValue={defaultValue ?? items[0]?.id}
      >
        {items.map((item) => (
          <AccordionItem
            value={item.id}
            key={item.id}
            className="relative border-x first:rounded-t-lg first:border-t last:rounded-b-lg last:border-b"
          >
            <AccordionTrigger className="px-4 py-4 text-[15px] leading-6 hover:no-underline">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4 px-4">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      {supportText && <p className="text-muted-foreground">{supportText}</p>}
    </div>
  );
}
