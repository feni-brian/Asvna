"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const FormSchema = z.object({
	first_name: z.string(),
	last_name: z.string(),
	email: z.string().email(),
	phone_number: z.string(),
	country: z.enum(["canada", "usa", "uk", "ug"]),
	company_size: z.enum(["1-10", "11-50", "51-100", "101-200", "201-500", "500+"]),
	info: z.string(),
});
type FormValues = {
	first_name: string;
	last_name: string;
	email: string;
	phone_number: string;
	country: "canada" | "usa";
	company_size: "1-10" | "11-50" | "51-100" | "101-200" | "201-500" | "500+";
	info: string;
};

export default function Section_01() {
	const [loading, setLoading] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const { toast } = useToast();
	const form = useForm<FormValues>({ resolver: zodResolver(FormSchema), defaultValues: { first_name: "", last_name: "", email: "", phone_number: "", country: "canada", company_size: "1-10" } });

	async function onSubmit(data: z.infer<typeof FormSchema>) {
		try {
			setLoading(true);
			const result = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
			if (!result.ok) throw new Error("Something went wrong!");
			setSubmitted(true);
		} catch (error) {
			console.log(error);
			toast({ title: "Error", description: "Something went wrong!" });
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className=" items-center justify-center flex flex-col px-20 m:px-0 py-20 space-y-10 text-center">
			{submitted ? (
				<div className="text-3xl text-green-400 ">Thank you for contacting us. We will be in contact with you shortly.</div>
			) : (
				<div className="text-5xl">
					<div className="text-5xl">Talk with our sales team</div>
					<div className="text-xl">Fill out your information and a Bird sales representative will contact you shortly.</div>
				</div>
			)}
			<Form {...form}>
				{submitted ? (
					<div className="text-2xl h-screen text-green-400 items-center space-y-20 flex flex-col">
						<div>
							<Image src="/videos/check.gif" alt="" className="h-28 w-28" />
						</div>
					</div>
				) : (
					<form onSubmit={form.handleSubmit(onSubmit)} className="md:w-2/3 space-y-6 border p-8 rounded-xl">
						<FormField
							control={form.control}
							name="first_name"
							render={({ field }) => (
								<FormItem className="flex items-center justify-center space-y-4 w-full">
									<FormLabel className="w-60 text-2xl pt-4">First Name</FormLabel>
									<FormControl>
										<Input className="" placeholder="" {...field} />
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="last_name"
							render={({ field }) => (
								<FormItem className="flex items-center justify-center space-y-4 w-full">
									<FormLabel className="w-60 text-2xl pt-4">Last Name</FormLabel>
									<FormControl>
										<Input className="" placeholder="" {...field} />
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem className="flex items-center justify-center space-y-4">
									<FormLabel className="w-60 text-2xl pt-4">E-mail</FormLabel>
									<FormControl>
										<Input className="" placeholder="" {...field} />
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="phone_number"
							render={({ field }) => (
								<FormItem className="flex items-center justify-center  space-y-4 w-full">
									<FormLabel className="w-60 text-2xl pt-4">Phone Number</FormLabel>
									<FormControl>
										<Input className="" placeholder="" {...field} />
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="country"
							render={({ field }) => (
								<FormItem className="flex items-center justify-center space-y-4 w-full">
									<FormLabel className="w-60 text-2xl pt-4">Country</FormLabel>
									<Select onValueChange={field.onChange} defaultValue={field.value}>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select a country" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<div className="flex gap-4">
												<SelectItem value="canada">🇨🇦 Canada</SelectItem>
											</div>
											<SelectItem value="usa">🇺🇸 USA</SelectItem>
											<SelectItem value="usa">🇺🇬 UG</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="company_size"
							render={({ field }) => (
								<FormItem className="flex items-center justify-center  space-y-4 w-full">
									<FormLabel className="w-60 text-2xl pt-4">Company Size</FormLabel>
									<Select onValueChange={field.onChange} defaultValue={field.value}>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="How many employees?" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<div className="flex gap-4">
												<SelectItem value="1-10">1-10</SelectItem>
											</div>
											<SelectItem value="11-50">11-50</SelectItem>
											<SelectItem value="51-100">51-100</SelectItem>
											<SelectItem value="101-200">101-200</SelectItem>
											<SelectItem value="201-500">201-500</SelectItem>
											<SelectItem value="500+">500+</SelectItem>
										</SelectContent>
									</Select>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="info"
							render={({ field }) => (
								<FormItem className="flex items-center justify-center  space-y-4 w-full">
									<FormLabel className="w-60 text-2xl pt-4">Information</FormLabel>
									<FormControl>
										<Textarea style={{ height: "200px" }} className="" placeholder="" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="flex items-center justify-center gap-4">
							<Button type="submit" disabled={loading} onClick={() => form.handleSubmit(onSubmit)} className="bg-[#000] text-xl rounded-sm w-80 h-20">
								Submit
							</Button>
						</div>
					</form>
				)}
			</Form>
		</div>
	);
}
