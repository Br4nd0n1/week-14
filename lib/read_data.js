import fs from 'fs';
import path from 'path';
import got from 'got';
const url = 'https://dev-cs5513-brandon.pantheonsite.io/wp-json/twentytwentyone-child/v1/show-custom-json';
const url_items = 'https://dev-cs5513-brandon.pantheonsite.io/wp-json/twentytwentyone-child/v1/show-items-json';
const url_departments= 'https://dev-cs5513-brandon.pantheonsite.io/wp-json/twentytwentyone-child/v1/show-departments-json';
const url_locations = 'https://dev-cs5513-brandon.pantheonsite.io/wp-json/twentytwentyone-child/v1/show-locations-json';
const JSON_FILE = await got(url).json();
const JSON_FILE_ITEMS = await got(url_items).json();
const JSON_FILE_DEPARTMENTS = await got(url_departments).json();
const JSON_FILE_LOCATIONS = await got(url_locations).json();

export async function getGeneralsList()
 {

  return JSON_FILE.map(
    function(post) 
    {
      return {
        id: post.ID,
        name: post.post_title,
        type: post.post_type
      };
    }
  );
}

export async function getItems()
 {

  return JSON_FILE_ITEMS.map(
    function(post) 
    {
      return {
        id: post.ID,
        name: post.post_title,
        type: post.post_type
      };
    }
  );
}

export async function getDepartments()
 {

  return JSON_FILE_DEPARTMENTS.map(
    function(post) 
    {
      return {
        id: post.ID,
        name: post.post_title,
        type: post.post_type
      };
    }
  );
}

export async function getLocations()
 {

  return JSON_FILE_LOCATIONS.map(
    function(post) 
    {
      return {
        id: post.ID,
        name: post.post_title,
        type: post.post_type
      };
    }
  );
}

export function getIdList() 
{
  return JSON_FILE.map(
    function(post)
     {
      return {
        params: {
          id: post.ID.toString()
        }
      };
    }
  );  
}

export async function getPerson(idRequested)
{
  const SELECTED_PERSON = JSON_FILE.filter(
    function(obj) 
    {
      return obj.ID.toString() === idRequested;
    }
  );
  if (SELECTED_PERSON.length > 0)
  {
    return SELECTED_PERSON[0];
  } 
    return {};
}